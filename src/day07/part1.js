"use strict";

const reSignal = /^([0-9]+) -> ([a-z]+)$/;
const reLink = /^([a-z]+) -> ([a-z]+)$/;
const reNot = /^NOT ([a-z]+) -> ([a-z]+)$/;
const reAnd = /^([a-z]+|[0-9]+) AND ([a-z]+) -> ([a-z]+)$/;
const reOr = /^([a-z]+) OR ([a-z]+) -> ([a-z]+)$/;
const reLShift = /^([a-z]+) LSHIFT ([0-9]+) -> ([a-z]+)$/;
const reRShift = /^([a-z]+) RSHIFT ([0-9]+) -> ([a-z]+)$/;


function modulo(a, b) {
        return a - Math.floor(a/b)*b;
}

function ToInteger(x) {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}

function ToUint16(x) {
    return modulo(ToInteger(x), Math.pow(2, 16));
}

let wires = {};

class Wire {
    constructor(dest) {
        this.dest = dest;
    }
}

class WireLink extends Wire {
    constructor(dest, a) {
        super(dest);
        this.a = a;
    }

    getSignal(){
        if (!this.result) {
            this.result = ToUint16(wires[this.a].getSignal())
        }
        return this.result;
    }
}

class WireNOT extends WireLink {
    getSignal(){
        if (!this.result) {
            this.result = ToUint16(~ wires[this.a].getSignal());
        }
        return this.result;
    }
}

class WireSignal extends Wire {
    constructor(dest, signal) {
        super(dest);
        this.signal = signal;
    }

    getSignal(){
        if (!this.result) {
            this.result = ToUint16(this.signal);
        }
        return this.result;
    }
}

class WireAND extends Wire {
    constructor(dest, a, b) {
        super(dest);
        this.a = a;
        this.b = b;
    }

    getSignal() {
        if (!this.result) {
            let a = this.a;
            if (isNaN(Number(a))) {
                a = wires[this.a].getSignal()
            }

            let b = this.b;
            if (isNaN(Number(b))) {
                b = wires[this.b].getSignal()
            }

            this.result = ToUint16(a & b);
        }

        return this.result;
    }
}

class WireOR extends WireAND {
    getSignal() {
        if (!this.result) {
            let a = this.a;
            if (isNaN(Number(a))) {
                a = wires[this.a].getSignal()
            }

            let b = this.b;
            if (isNaN(Number(b))) {
                b = wires[this.b].getSignal()
            }

            this.result = ToUint16(a | b);
        }

        return this.result;
    }
}

class WireLShift extends Wire {
    constructor(dest, a, num) {
        super(dest);
        this.a = a;
        this.num = num;
    }

    getSignal() {
        if (!this.result) {
            this.result = ToUint16(wires[this.a].getSignal() << Number(this.num))
        }

        return this.result;
    }
}

class WireRShift extends WireLShift {
    getSignal() {
        if (!this.result) {
            this.result = ToUint16(wires[this.a].getSignal() >> Number(this.num))
        }

        return this.result;
    }
}

module.exports = input => {
    const lines = input.split('\n');

    lines.forEach(line => {
        let match;
        let wire;

        match = reSignal.exec(line);
        if (match) wire = new WireSignal(match[2], match[1]);

        match = reAnd.exec(line);
        if (match) wire = new WireAND(match[3], match[1], match[2]);

        match = reOr.exec(line);
        if (match) wire = new WireOR(match[3], match[1], match[2]);

        match = reLShift.exec(line);
        if (match) wire = new WireLShift(match[3], match[1], match[2]);

        match = reRShift.exec(line);
        if (match) wire = new WireRShift(match[3], match[1], match[2]);

        match = reNot.exec(line);
        if (match) wire = new WireNOT(match[2], match[1]);

        match = reLink.exec(line);
        if (match) wire = new WireLink(match[2], match[1]);

        wires[wire.dest] = wire;
    });

    return wires;
}

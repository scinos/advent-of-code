"use strict";

const wire = require('./wire.js');

module.exports = input => {
    const wires1 = wire(input);
    const sigA = wires1['a'].getSignal();

    let input2 = input.replace('14146 -> b','956 -> b')
    const wires2 = wire(input2);
    return wires2['a'].getSignal();
}

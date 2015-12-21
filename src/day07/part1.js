"use strict";

const wire = require('./wire.js');

module.exports = input => {
    const wires = wire(input);
    return wires['a'].getSignal();
}

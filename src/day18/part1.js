"use strict";

const extract = require('../../src/day18/extract.js');
const CA = require('../../src/day18/ca.js');

module.exports = input => {
    const ca = new CA(extract(input), 100);

    for (var i = 0; i < 100; i++) {
        ca.iterate();
    };

    return ca.state.filter(c => c === 1).length;
}
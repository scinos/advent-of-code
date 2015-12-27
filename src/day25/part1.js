"use strict";

const extract = require('../../src/day25/extract.js');
const code = require('../../src/day25/code.js');
const position = require('../../src/day25/position.js');


module.exports = input => {
    const target = position(extract(input));
    let seed = 20151125;

    for (let i = 1; i<target; i++) {
        seed = code(seed);
    }

    return seed;
}
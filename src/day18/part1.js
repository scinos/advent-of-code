"use strict";

const extract = require('../../src/day18/extract.js');
const CA = require('../../src/day18/ca.js');

module.exports = input => {
    const ca = new CA(extract(input), 100);

    for (let i = 0; i < 100; i++) {
        ca.iterate();
    };

    return ca.getState()
        .reduce((a,b)=>a.concat(b), [])
        .filter(c => c === 1).length;
}
"use strict";

const extract = require('../../src/day18/extract.js');
const CA = require('../../src/day18/ca.js');

module.exports = input => {
    const ca = new CA(extract(input), 100);
    ca.set(0,0,1);
    ca.set(99,0,1);
    ca.set(0,99,1);
    ca.set(99,99,1);

    for (let i = 0; i < 100; i++) {
        ca.iterate();
        ca.set(0,0,1);
        ca.set(99,0,1);
        ca.set(0,99,1);
        ca.set(99,99,1);
    };

    return ca.getState()
        .reduce((a,b)=>a.concat(b), [])
        .filter(c => c === 1).length;
}
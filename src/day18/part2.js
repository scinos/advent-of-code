"use strict";

const extract = require('../../src/day18/extract.js');
const CA = require('../../src/day18/ca.js');

module.exports = input => {
    const ca = new CA(extract(input), 100);
    ca.state[ca.matrixToLinear([0,0])]=1;
    ca.state[ca.matrixToLinear([99,0])]=1;
    ca.state[ca.matrixToLinear([0,99])]=1;
    ca.state[ca.matrixToLinear([99,99])]=1;

    for (var i = 0; i < 100; i++) {
        ca.iterate();
        ca.state[ca.matrixToLinear([0,0])]=1;
        ca.state[ca.matrixToLinear([99,0])]=1;
        ca.state[ca.matrixToLinear([0,99])]=1;
        ca.state[ca.matrixToLinear([99,99])]=1;
    };

    return ca.state.filter(c => c === 1).length;
}
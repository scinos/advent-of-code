"use strict";

const divisors = require('../../src/day20/divisors.js');

module.exports = input => {
    const HOUSES = 50;
    const NUM_REGALOS = 11;
    input = Number(input);

    for (let i = 1; i < input; i++) {
        let presents = divisors(i)
            .filter(a => a*HOUSES >= i)
            .reduce((a,b)=>a+b)
            *NUM_REGALOS;

        if (presents >= input) return i;
    };
}
"use strict";

const divisors = require('../../src/day20/divisors.js');

module.exports = input => {
    const NUM_REGALOS = 10;
    input = Number(input);

    for (let i = 1; i < input; i++) {
        const presents = divisors(i).reduce((a,b)=>a+b)*NUM_REGALOS;
        if (presents >= input) return i;
    };
}
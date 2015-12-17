"use strict";

const combinations = require('../../src/day17/combinations.js');

module.exports = input => {
    const containers = input.split('\n').map(Number).sort((a,b)=>a-b);
    const solutionsBySize = [];

    for (const solution of combinations(150, containers)) {
        solutionsBySize[solution.length] = solutionsBySize[solution.length]+1 || 1;
    }

    for (let solution of solutionsBySize) {
        if (solution) return solution;
    }
}
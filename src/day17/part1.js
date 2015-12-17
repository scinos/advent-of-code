"use strict";

const combinations = require('../../src/day17/combinations.js');

module.exports = input => {
    const containers = input.split('\n').map(Number);
    return Array.from(combinations(150, containers)).length;
}
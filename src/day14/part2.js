"use strict";

const racePoints = require('../../src/day14/racePoints.js');
const extract = require('../../src/day14/extract.js');

module.exports = input => {
    const raceLength = 2503;
    const reindeers = input.split('\n').map(extract);
    const winner = racePoints(raceLength, reindeers);
    return winner.distance;
}
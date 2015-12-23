"use strict";

const race = require('../../src/day14/race.js');
const extract = require('../../src/day14/extract.js');

module.exports = input => {
    const raceLength = 2503;
    const reindeers = input.split('\n').map(extract);
    const winner = race(raceLength, reindeers);
    return winner[0].distance;
}
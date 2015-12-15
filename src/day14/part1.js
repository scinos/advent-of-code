"use strict";

const race = require('../../src/day14/race.js');
const extract = require('../../src/day14/extract.js');

module.exports = (raceLength, input) => {
    let reindeers = input.split('\n').map(extract);
    let winner = race(raceLength, reindeers);
    return winner;
}
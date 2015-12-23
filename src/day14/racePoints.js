"use strict";

const race = require('../../src/day14/race.js');
const extract = require('../../src/day14/extract.js');

module.exports = (raceLength, reindeers) => {
    const scores = {};

    reindeers.forEach( r => scores[r.name]=0 )

    for (let i = 1; i<=raceLength; i++) {
        race(i, reindeers).forEach(winner => {
            scores[winner.name]++;
        });
    }

    let winner = { distance: 0 };
    for (let reindeer in scores) {
        let distance = scores[reindeer];
        if (distance > winner.distance) {
            winner.distance = distance;
            winner.name = reindeer;
        }
    }

    return winner;
}
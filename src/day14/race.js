"use strict";

const reindeer = require('../../src/day14/reindeer.js');

module.exports = (raceLength, reindeers) => {
    return reindeers
        .map(({name, speed, duration, rest}) => {
            return {
                name,
                distance: reindeer(raceLength, speed, duration, rest)
            }
        })
        .reduce((last, reindeer) => {
            if (last.distance > reindeer.distance) return last;
            else return reindeer;
        });
}
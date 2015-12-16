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
        .sort( (a,b) => b.distance-a.distance)
        .filter((reindeer, idx, reindeers) => reindeer.distance === reindeers[0].distance);
}
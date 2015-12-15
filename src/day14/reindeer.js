"use strict";

module.exports = (raceLength, speed, duration, rest) => {
    let cycleLength = duration + rest;
    let cycleDistance = speed * duration;
    let cycles = Math.floor(raceLength/cycleLength);
    let partialCycle = Math.min(duration, raceLength%cycleLength);

    let distance = cycles*cycleDistance + partialCycle*speed;

    return distance;
};

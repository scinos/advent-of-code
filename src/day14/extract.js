"use strict";

//Dancer can fly 27 km/s for 5 seconds, but then must rest for 132 seconds.
const re = /^(.*?) can fly ([0-9]+) km\/s for ([0-9]+) seconds, but then must rest for ([0-9]+) seconds\.$/
module.exports = input => {
    let [, name, speed, duration, rest] = re.exec(input);
    return {
        name,
        speed: Number(speed),
        duration: Number(duration),
        rest: Number(rest)
    };
}
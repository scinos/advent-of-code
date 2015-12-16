"use strict";

const re = /^Sue ([0-9]+): (.*)$/;
const reThing = /^ *([a-z]+): ([0-9]+) *$/;
module.exports = input => {
    const [, sueNumber, things] = re.exec(input);
    const result = {};

    for (const thing of things.split(',')) {
        const [, name, number] = reThing.exec(thing);
        result[name] = Number(number);
    }

    return {
        number: Number(sueNumber),
        things: result
    }
};
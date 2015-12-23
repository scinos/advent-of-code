"use strict";

const variations = require('./variations.js');
const extract = require('./extract.js');
const happiness = require('./happiness.js');

module.exports = people => {
    const peopleNames = Object.keys(people);
    const firstPerson = peopleNames[0];
    const everybodyElse = peopleNames.slice(1);
    let bestHappines = -Infinity;

    // Fixing the first item of the permitation reduces lots of redudannt
    // combinations. Eg: A-B-C-D is the same tha B-C-D-A and C-D-B-A, so we only
    // take into account the combintations that start with A.
    for (let variation of variations(everybodyElse)) {
        variation.unshift(firstPerson);
        let h = happiness(people, variation) + happiness(people, variation.reverse());
        bestHappines = Math.max(h, bestHappines);
    }

    return bestHappines;
}
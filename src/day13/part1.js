"use strict";

const re = /^(.+) would (gain|lose) ([0-9]+) happiness units by sitting next to (.+)\.$/
let people = {};

function extractNodes(line) {
    let [, name1, mode, happiness, name2] = re.exec(line);
    happiness = Number(happiness);
    if (mode === "lose") happiness = -happiness;

    if (!people[name1]) people[name1] = {people:{}};
    people[name1].name = name1;
    people[name1].people[name2] = happiness;
}

function* generateVariation(current, rest) {
    if (rest.length <= 1) {
        yield current.concat(rest);
    } else {
        for (let i = 0; i<rest.length; i++) {
            let idx = i;
            let node = rest[idx];
            yield* generateVariation(current.concat(node), rest.slice(0, idx).concat(rest.slice(idx+1)));
        }
    }
}

function sumHappiness(variation, people) {
    return variation.reduce( (result, val, idx) => {
        let nextVal = variation[idx+1] || variation[0];
        return result + people[val].people[nextVal];
    }, 0);
}

module.exports = input => {
    const lines = input.split('\n');
    lines.forEach(extractNodes);

    // Fixing the first item of the permitation reduces lots of redudannt
    // combinations. Eg: A-B-C-D is the same tha B-C-D-A and C-D-B-A, so we only
    // take into account the combintations that start with A.
    const peopleNames = Object.keys(people);

    let bestHappines = -Infinity;
    let bestOrder = null;

    for (let variation of generateVariation([peopleNames[0]], peopleNames.slice(1))) {
        let happiness = sumHappiness(variation, people);
        variation.reverse();
        happiness += sumHappiness(variation, people);

        if (happiness >= bestHappines) {
            bestHappines = happiness;
            bestOrder = variation;
        }
    }

    console.log(bestHappines, bestOrder);
}
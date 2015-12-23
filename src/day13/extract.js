"use strict";

const re = /^(.+) would (gain|lose) ([0-9]+) happiness units by sitting next to (.+)\.$/

function extractNodes(people, line) {
    let [, name1, mode, happiness, name2] = re.exec(line);
    happiness = Number(happiness);
    if (mode === "lose") happiness = -happiness;

    if (!people[name1]) people[name1] = {people:{}};
    people[name1].name = name1;
    people[name1].people[name2] = happiness;

    return people;
}

module.exports = input => input.split('\n').reduce(extractNodes, {});
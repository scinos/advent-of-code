"use strict";

const extract = require("./extract.js");

module.exports = input => {
    let aunts = input.split('\n').map(extract);

    const target = {
        children: 3,
        cats: 7,
        samoyeds: 2,
        pomeranians: 3,
        akitas: 0,
        vizslas: 0,
        goldfish: 5,
        trees: 3,
        cars: 2,
        perfumes: 1
    }

    for (let t in target) {
        aunts = aunts.filter(aunt => {
            let things = aunt.things;
            return (things[t] == target[t] || !(t in things));
        });
    }

    return aunts;
}

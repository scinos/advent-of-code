"use strict";

const re = /^(.*?) to (.*?) = ([0-9]+)$/

module.exports = input => {
    const nodes = {};
    const lines = input.split('\n');
    let results = [];
    let bestDistance = Infinity;
    let bestRoute = null;

    function extractNodes(line) {
        let [, city1, city2, distance] = re.exec(line);
        distance = Number(distance);

        if (!nodes[city1]) nodes[city1] = {cities:{}}
        if (!nodes[city2]) nodes[city2] = {cities:{}}

        nodes[city1].name = city1;
        nodes[city1].cities[city2] = distance;

        nodes[city2].name = city2;
        nodes[city2].cities[city1] = distance;
    }

    function f(current, rest) {
        if (rest.length <= 1) {
            let permutation = current.concat(rest);
            let distance = 0;
            for (let i = 0; i < permutation.length-1; i++) {
                let p = permutation[i];
                let pNext = permutation[i+1];
                distance += nodes[p].cities[pNext];
            };
            if (distance < bestDistance) {
                bestDistance = distance;
                bestRoute = permutation;
            }
        } else {
            rest.forEach((node, idx) => {
                f(current.concat(node), rest.slice(0, idx).concat(rest.slice(idx+1)));
            });
        }
    };

    lines.forEach(extractNodes);
    f([], Object.keys(nodes));

    return bestDistance;
}

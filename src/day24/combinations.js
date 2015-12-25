"use strict";

module.exports = function* findContainers(target, containers, maxLength) {
    containers = containers.sort((a,b)=>b-a);

    function* f(idx, solution) {
        let remaining = target - solution.reduce((a,b)=>a+b, 0);
        if (solution.length > maxLength) return;

        for (let i = idx; i<containers.length; i++) {
            let candidate = containers[i];

            if (candidate < remaining) {
                // Valid solution, keep adding more bottles
                yield* f(i+1, solution.concat(candidate));
            // } else if (candidate > remaining) {
                // yield* f(i+1, solution);
            } else if (candidate === remaining) {
                // Bottle just right. As there are duplicated bottles, we need
                // to keep looking for solutions.
                yield solution.concat(candidate);
            }
        }
    }

    yield* f(0,[]);
}
"use strict";

module.exports = function* findContainers(target, containers) {
    containers = containers.sort((a,b)=>a-b);
    function* f(idx, solution) {
        let remaining = target - solution.reduce((a,b)=>a+b, 0);

        for (let i = idx; i<containers.length; i++) {
            let candidate = containers[i];

            if (candidate < remaining) {
                // Valid solution, keep adding more bottles
                yield* f(i+1, solution.concat(candidate));
            } else if (candidate > remaining) {
                // Bottle too big. As they are sorted, we don't need to keep
                // looking for more.
                break;
            } else if (candidate === remaining) {
                // Bottle just right. As there are duplicated bottles, we need
                // to keep looking for solutions.
                yield solution.concat(candidate);
            }
        }
    }

    yield* f(0,[]);
}
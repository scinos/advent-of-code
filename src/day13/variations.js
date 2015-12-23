"use strict";

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

module.exports = function* (items) {
    yield* generateVariation([], items);
}
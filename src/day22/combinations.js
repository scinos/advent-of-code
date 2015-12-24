"use strict";

function* combination(items) {
    for (let item of items) {
        yield [item];
    }
}

module.exports = function* (items) {
    let i = [];
    for (let k in items) {
        i.push(items[k]);
    }
    yield* combination(i);
}

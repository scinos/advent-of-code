"use strict";

module.exports = input => {
    const lines = input.split('\n');
    let count = 0;

    lines.forEach(line => {
        const dupes = /(.{2}).*\1/;
        const repeats = /(.).\1/;

        if (!dupes.test(line)) return;
        if (!repeats.test(line)) return;

        count++;
    })

    return count;
}

"use strict";

module.exports = (seed, iter) => {
    let s = seed;
    let result;

    for (let i = 0; i < iter; i++) {
        result = "";
        const re = /(.)\1*/g;
        let match;

        while (match = re.exec(s)) {
            result += match[0].length + match[1];
        };

        s = result;
    };

    return result;
}



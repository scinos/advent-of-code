"use strict";

module.exports = seed => {
    let s = seed;
    let result;

    result = "";
    const re = /(.)\1*/g;
    let match;

    while (match = re.exec(s)) {
        result += match[0].length + match[1];
    };

    return result;
}

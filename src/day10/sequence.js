"use strict";

module.exports = seed => {
    let result = "";
    let currentChar = seed[0];
    let currentLength = 1;

    for (let i = 1, len = seed.length; i < len; i++) {
        let c = seed[i];
        if (currentChar !== c) {
            result += currentLength + currentChar;
            currentLength = 1;
        } else {
            currentLength++;
        }
        currentChar = c;
    };
    result += currentLength + currentChar;

    return result;
}

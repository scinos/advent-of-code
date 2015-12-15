"use strict";
module.exports = input => {
    let total = 0;

    for (let i in input) {
        if (input[i] === "(") total++
        else total--;

        if (total === -1) return +i+1;
    }

    throw new Error("Basement not reached!");
};

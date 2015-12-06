"use strict";

module.exports = input => {
    let total = 0;

    for (let i in input) {
        let c = input[i];
        if (c=="(") total++;
        else if (c==")") total--;

        if (total == -1) return +i+1;
    }

    throw new Error("Basement not reached!");
};

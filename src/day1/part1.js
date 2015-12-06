"use strict";

module.exports = input => {
    let total = 0;

    for (let c of input) {
        if (c=="(") total++;
        else if (c==")") total--;
    }

    return total
};
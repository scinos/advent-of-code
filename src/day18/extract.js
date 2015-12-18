"use strict";

module.exports = input => {
    const result = [];

    for (const c of input) {
        if (c === "#") result.push(1)
        else if (c === ".") result.push(0)
    }

    return result;
}
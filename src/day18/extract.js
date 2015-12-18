"use strict";

module.exports = input => {
    const result = [];

    let row = [];
    result.push(row);
    for (const c of input) {
        if (c === "#") row.push(1)
        else if (c === ".") row.push(0)
        else if (c === "\n") {
            row = [];
            result.push(row);
        }
    }
    return result;
}
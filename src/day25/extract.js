"use strict";

module.exports = input => {
    const re = /Enter the code at row ([0-9]+), column ([0-9]+)\./;
    let [, row, column] = re.exec(input).map(Number);
    return {row, column}
}
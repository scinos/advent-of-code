"use strict";
module.exports = input => {
    return Array.prototype.reduce.call(
        input,
        (total, val) => total + (val=="("?1:-1),
        0
    );
};
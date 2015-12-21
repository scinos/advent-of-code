"use strict";

const encode = require('./encode.js');

module.exports = input => {
    const lines = input.split('\n');
    let result = { code: 0, char: 0 };

    lines.forEach(line => {
        result.code += line.length;
        result.char += encode(line).length;
    });

    return result.char - result.code;
}

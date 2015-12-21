"use strict";

const decode = require('./decode.js');

module.exports = input => {
    const lines = input.split('\n');
    let result = { code: 0, char: 0 };

    lines.forEach(line => {
        result.code += line.length;
        result.char += decode(line).length;
    });

    return result.code - result.char;
}

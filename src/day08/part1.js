"use strict";

module.exports = input => {
    const lines = input.split('\n');

    let result = {
        code: 0,
        char: 0
    };

    lines.forEach(line => {
        result.code += line.length;
        result.char += line
            .replace(/\\\\/g,'#')
            .replace(/\\"/g,'!')
            .replace(/"/g,'')
            .replace(/\\x[0-9a-z]{2}/g,'@')
            .length;
    });

    return result;
}

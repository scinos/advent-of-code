"use strict";

module.exports = input => {
    const lines = input.split('\n');

    let result = {
        code: 0,
        char: 0
    };

    lines.forEach(line => {
        result.code += line.length;
        result.char += 2 + line
            .replace(/\\/g,'\\\\')
            .replace(/"/g, '\\"')
            .length;
    });

    return result;
}

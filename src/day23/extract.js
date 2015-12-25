"use strict";

const re=/^(hlf|tpl|inc|jmp|jie|jio) ([ab]|[+-][0-9]+)(?:, ([ab]|[+-][0-9]+))?$/;

module.exports = input => {
    let program = [];
    for (let line of input.split('\n')) {
        let [, instruction, p1, p2] = re.exec(line);

        if (!isNaN(Number(p1))) p1 = Number(p1);
        if (!isNaN(Number(p2))) p2 = Number(p2);

        program.push( {instruction, p1, p2 });
    }
    return program;
}
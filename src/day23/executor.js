"use strict";

module.exports = (program, registers) => {
    let pointer = 0;

    for (let pointer = 0; pointer < program.length;) {
        let instruction = program[pointer];

        if (!instruction) break;

        switch (instruction.instruction) {
            case "hlf":
                registers[instruction.p1] = Math.floor(registers[instruction.p1]/2);
                pointer++
                break;
            case "tpl":
                registers[instruction.p1] = registers[instruction.p1]*3;
                pointer++
                break;
            case "inc":
                registers[instruction.p1] = registers[instruction.p1]+1;
                pointer++
                break;
            case "jmp":
                pointer = pointer + instruction.p1;
                break;
            case "jie":
                if ( registers[instruction.p1] % 2 == 0 ) pointer = pointer + instruction.p2;
                else pointer++;
                break;
            case "jio":
                if ( registers[instruction.p1] == 1 ) pointer = pointer + instruction.p2;
                else pointer++;
                break;
        }
    }

    return registers;
}
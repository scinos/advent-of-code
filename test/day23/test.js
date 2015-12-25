"use strict";

const extract = require('../../src/day23/extract.js');
const executor = require('../../src/day23/executor.js');
const part1 = require('../../src/day23/part1.js');
const part2 = require('../../src/day23/part2.js');

const fs = require('fs');
const expect = require('chai').expect;

describe('Day 23: Opening the Turing Lock', function () {
    const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});

    describe("Program Extractor", function() {
        it ("Extracts the program", function() {
            expect(extract('hlf a')).to.deep.equal([{
                instruction: 'hlf',
                p1: 'a',
                p2: undefined
            }]);

            expect(extract('tpl a')).to.deep.equal([{
                instruction: 'tpl',
                p1: 'a',
                p2: undefined
            }]);

            expect(extract('inc a')).to.deep.equal([{
                instruction: 'inc',
                p1: 'a',
                p2: undefined
            }]);

            expect(extract('jmp +23')).to.deep.equal([{
                instruction: 'jmp',
                p1: 23,
                p2: undefined
            }]);

            expect(extract('jmp -23')).to.deep.equal([{
                instruction: 'jmp',
                p1: -23,
                p2: undefined
            }]);

            expect(extract('jie a, +23')).to.deep.equal([{
                instruction: 'jie',
                p1: 'a',
                p2: 23
            }]);

            expect(extract('jie b, -23')).to.deep.equal([{
                instruction: 'jie',
                p1: 'b',
                p2: -23
            }]);

            expect(extract('jio a, +23')).to.deep.equal([{
                instruction: 'jio',
                p1: 'a',
                p2: 23
            }]);

            expect(extract('jio b, -23')).to.deep.equal([{
                instruction: 'jio',
                p1: 'b',
                p2: -23
            }]);
        });
    });

    describe("Program Executor", function() {
        it("Executes the program", function() {
            let program = extract([
                'inc a',
                'jio a, +2',
                'tpl a',
                'inc a'
            ].join('\n'));

            expect(executor(program, {a: 0, b: 0})).to.deep.equal({
                a: 2,
                b: 0
            });
        });
    });

    describe("Part 1 - Register a = 0", function() {
        it("Register a = 0", function() {
            let program = extract(file);
            expect(part1(file)).to.equal(184);
        });
    });

    describe("Part 2 - Register a = 1", function() {
        it("Register a = 1", function() {
            let program = extract(file);
            expect(part2(file)).to.equal(231);
        });
    });

});

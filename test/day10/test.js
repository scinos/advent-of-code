"use strict";

const part1 = require('../../src/day10/part1.js');
const part2 = require('../../src/day10/part2.js');
const sequence = require('../../src/day10/sequence.js');
const expect = require('chai').expect;
const fs = require('fs');

describe('Day 10: Elves Look, Elves Say', function () {
    const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});

    describe('Sequence generator', function() {
        it('Generates the next step in the sequence', function() {
            expect(sequence("1")).to.equal("11");
            expect(sequence("11")).to.equal("21");
            expect(sequence("21")).to.equal("1211");
            expect(sequence("1211")).to.equal("111221");
            expect(sequence("111221")).to.equal("312211");
        });
    });

    describe('Part 1', function() {
        it('Input file', function() {
            expect(part1(file).length).to.equal(252594);
        });
    });

    describe('Part 2', function() {
        it('Input file', function() {
            expect(part2(file).length).to.equal(3579328);
        });
    });
});

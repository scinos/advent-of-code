"use strict";

const combinations = require('../../src/day17/combinations.js');
const part1 = require('../../src/day17/part1.js');
const part2 = require('../../src/day17/part2.js');

const fs = require('fs');
const expect = require('chai').expect;

describe('Day 17: No Such Thing as Too Much', function () {
    describe("Combinations", function() {
        it ("Example from the page", function() {
            let result = Array.from(combinations(25, [20, 15, 10, 5, 5]));
            expect(result).to.deep.equal([
                [5, 5, 15],
                [5, 20],
                [5, 20],
                [10, 15]
            ]);
        });

        it ("Duplicated elements", function() {
            let result = Array.from(combinations(25, [20, 20, 5, 5]));
            expect(result).to.deep.equal([
                [5, 20],
                [5, 20],
                [5, 20],
                [5, 20]
            ]);
        });
    });

    describe("Part 1 - All combinations", function() {
        it("Input file", function() {
            let result = part1(fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'}));
            expect(result).to.equal(654);
        });
    });

    describe("Part 2 - Minimum combinations", function() {
        it("Input file", function() {
            let result = part2(fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'}));
            expect(result).to.equal(57);
        });
    });
});

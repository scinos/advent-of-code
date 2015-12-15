"use strict";

const part1 = require('../../src/day01/part1.js');
const part2 = require('../../src/day01/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    expect(fn(input)).to.equal(output);
}

function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 1', function () {
    describe('Part 1 - Destination floor', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it('Detects parentheses', function() {
            assert('(', 1);
            assert(')', -1);
        });

        it('Examples from the page', function() {
            assert('(())', 0);
            assert('()()', 0);
            assert('(((', 3);
            assert('(()(()(', 3);
            assert('))(((((', 3);
            assert('())', -1);
            assert('))(', -1);
            assert(')))', -3);
            assert(')())())', -3);
        });

        it('Input file', function() {
            assertFile('input.txt', 138);
        });
    });

    describe('Part 2 - Going to basement', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it('detects getting to the basement', function() {
            assert(')', 1);
            assert('())', 3);
        });
        it('example 1', function() {
            assert(')', 1);
        });
        it('example 2', function() {
            assert('()())', 5);
        });
        it('input', function() {
            assertFile('input.txt', 1771);
        });
    });
});

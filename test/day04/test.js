"use strict";

const part1 = require('../../src/day04/part1.js');
const part2 = require('../../src/day04/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    expect(fn(input)).to.equal(output);
}

function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 4', function () {
    this.timeout(0);

    describe('Part 1 - Hash with five zeroes', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it('Examples from the page', function() {
            assert('abcdef', 609043);
            assert('pqrstuv', 1048970);
        });

        it('Input', function() {
            assertFile('input.txt', 254575);
        });
    });

    describe('Part 2 - Hash with six zeroes', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it('Input', function() {
            assertFile('input.txt', 1038736);
        });
    });
});

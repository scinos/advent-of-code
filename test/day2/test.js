"use strict";

const part1 = require('../../src/day2/part1.js');
const part2 = require('../../src/day2/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    expect(fn(input)).to.equal(output);
}
function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 2', function () {
    describe('Part 1', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it('2x3x4', function() {
            assert('2x3x4', 58);
        });
        it('1x1x10', function() {
            assert('1x1x10', 43);
        });
        it('input', function() {
            assertFile('input.txt', 1586300);
        });
    });

    describe('Part 2', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it('2x3x4', function() {
            assert('2x3x4', 34);
        });
        it('1x1x10', function() {
            assert('1x1x10', 14);
        });
        it('input', function() {
            assertFile('input.txt', 3737498);
        });
    });
});

"use strict";

const part1 = require('../../src/day3/part1.js');
const part2 = require('../../src/day3/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    expect(fn(input)).to.equal(output);
}
function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 3', function () {
    describe('Part 1', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it('>', function() {
            assert('>', 2);
        });
        it('^>v<', function() {
            assert('^>v<', 4);
        });
        it('^v^v^v^v^v', function() {
            assert('^v^v^v^v^v', 2);
        });
        it('input', function() {
            assertFile('input.txt', 2081);
        });
    });

    describe('Part 2', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it('^v>', function() {
            assert('^v', 3);
        });
        it('^>v<', function() {
            assert('^>v<', 3);
        });
        it('^v^v^v^v^v', function() {
            assert('^v^v^v^v^v', 11);
        });
        it('input', function() {
            assertFile('input.txt', 2341);
        });
    });

});

"use strict";

const part1 = require('../../src/day03/part1.js');
const part2 = require('../../src/day03/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    expect(fn(input)).to.equal(output);
}

function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 3', function () {
    describe('Part 1 - Santa is delivering', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it('Examples from the page', function() {
            assert('>', 2);
            assert('^>v<', 4);
            assert('^v^v^v^v^v', 2);
        });

        it('Input file', function() {
            assertFile('input.txt', 2081);
        });
    });

    describe('Part 2 - Santa and Robo-Santa are delivering', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it('Examples from the page', function() {
            assert('^v', 3);
            assert('^>v<', 3);
            assert('^v^v^v^v^v', 11);
        });

        it('Input file', function() {
            assertFile('input.txt', 2341);
        });
    });
});

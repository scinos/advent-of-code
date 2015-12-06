"use strict";

const part1 = require('../../src/day5/part1.js');
const part2 = require('../../src/day5/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    expect(fn(input)).to.equal(output);
}
function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 5', function () {
    describe('Part 1', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it('ugknbfddgicrmopn', function() {
            assert('ugknbfddgicrmopn', 1);
        });
        it('aaa', function() {
            assert('aaa', 1);
        });
        it('jchzalrnumimnmhp', function() {
            assert('jchzalrnumimnmhp', 0);
        });
        it('haegwjzuvuyypxyu', function() {
            assert('haegwjzuvuyypxyu', 0);
        });
        it('dvszwmarrgswjxmb', function() {
            assert('dvszwmarrgswjxmb', 0);
        });
        it('input', function() {
            assertFile('input.txt', 258);
        });
    });

    describe('Part 2', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it('qjhvhtzxzqqjkmpb', function() {
            assert('qjhvhtzxzqqjkmpb', 1);
        });
        it('xxyxx', function() {
            assert('xxyxx', 1);
        });
        it('uurcxstgmygtbstg', function() {
            assert('uurcxstgmygtbstg', 0);
        });
        it('ieodomkazucvgmuy', function() {
            assert('ieodomkazucvgmuy', 0);
        });
        it('input', function() {
            assertFile('input.txt', 53);
        });
    });

});

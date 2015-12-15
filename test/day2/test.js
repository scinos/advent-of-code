"use strict";

const measures = require('../../src/day2/measures.js');
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
    describe('Measures', function() {
        it('Extracts the measures', function() {
            expect(measures('1x2x3')).to.deep.equal([1,2,3]);
            expect(measures('1x1x1')).to.deep.equal([1,1,1]);
            expect(measures('100x100x100')).to.deep.equal([100,100,100]);
        });
        it('Sorts the measures', function() {
            expect(measures('1x2x3')).to.deep.equal([1,2,3]);
            expect(measures('1x3x2')).to.deep.equal([1,2,3]);
            expect(measures('3x2x1')).to.deep.equal([1,2,3]);
        });
    });

    describe('Part 1 - Square feet of wrapping paper', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it('Examples from the page', function() {
            assert('2x3x4', 58);
            assert('1x1x10', 43);
        });

        it('Input file', function() {
            assertFile('input.txt', 1586300);
        });
    });

    describe('Part 2 - Feet of ribbon', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it('Examples from the page', function() {
            assert('2x3x4', 34);
            assert('1x1x10', 14);
        });

        it('Input file', function() {
            assertFile('input.txt', 3737498);
        });
    });
});

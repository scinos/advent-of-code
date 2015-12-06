"use strict";

const part1 = require('../../src/day6/part1.js');
const part2 = require('../../src/day6/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    expect(fn(input)).to.equal(output);
}
function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 6', function () {
    describe('Part 1', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it('turn on 0,0 through 999,999', function() {
            assert('turn on 0,0 through 999,999', 1000000);
        });
        it('toggle 0,0 through 999,0', function() {
            assert('toggle 0,0 through 999,0', 1000);
            assert('turn on 0,0 through 999,0\ntoggle 0,0 through 999,0', 0);
            assert('turn on 0,0 through 99,0\ntoggle 0,0 through 999,0', 900);
        });
        it('turn off 499,499 through 500,500', function() {
            assert('turn on 0,0 through 999,999\nturn off 499,499 through 500,500', 999996);
        });
        it('input', function() {
            assertFile('input.txt', 569999);
        });
    });

    describe('Part 2', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it('turn on 0,0 through 0,0', function() {
            assert('turn on 0,0 through 0,0', 1);
        });
        it('toggle 0,0 through 999,999', function() {
            assert('toggle 0,0 through 999,999', 2000000);
        });
        it('input', function() {
            assertFile('input.txt', 17836115);
        });
    });

});

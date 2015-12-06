"use strict";

const part1 = require('../../src/day4/part1.js');
const part2 = require('../../src/day4/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    expect(fn(input)).to.equal(output);
}

describe('Day 4', function () {
    describe('Part 1', function() {
        const assert = assertPart.bind({}, part1);

        it('abcdef', function() {
            assert('abcdef', 609043);
        });
        it('pqrstuv', function() {
            assert('pqrstuv', 1048970);
        });
        it('bgvyzdsv', function() {
            assert('bgvyzdsv', 254575);
        });
    });

    describe('Part 2', function() {
        const assert = assertPart.bind({}, part2);

        it('bgvyzdsv', function() {
            assert('bgvyzdsv', 1038736);
        });
    });
});

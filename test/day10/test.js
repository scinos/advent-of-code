"use strict";

const part1 = require('../../src/day10/part1.js');
const expect = require('chai').expect;
const fs = require('fs');

describe('Day 10', function () {
    describe('Part 1', function() {
        it('Example', function() {
            expect(part1("1", 1)).to.equal("11");
            expect(part1("1", 2)).to.equal("21");
            expect(part1("1", 3)).to.equal("1211");
            expect(part1("1", 4)).to.equal("111221");
            expect(part1("1", 5)).to.equal("312211");
        });

        it('input', function() {
            expect(part1("1113222113", 40).length).to.equal(252594);
        });
    });

    describe('Part 2', function() {
        it('input', function() {
            expect(part1("1113222113", 50).length).to.equal(3579328);
        });
    });
});

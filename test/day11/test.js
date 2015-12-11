"use strict";

const part1 = require('../../src/day11/part1.js');
const expect = require('chai').expect;
const fs = require('fs');

describe('Day 11', function () {
    describe('Part 1', function() {
        it('Example', function() {
            expect(part1("abcdefgh")).to.be.equal("abcdffaa");
            expect(part1("ghijklmn")).to.be.equal("ghjaabcc");
        });

        it('input', function() {
            expect(part1('cqjxjnds')).to.be.equal('cqjxxyzz');
        });
    });

    describe('Part 2', function() {
        it('input', function() {
            expect(part1('cqjxxyzz')).to.be.equal('cqkaabcc');
        });
    });
});

"use strict";

const password = require('../../src/day11/password.js');
const part1 = require('../../src/day11/part1.js');
const part2 = require('../../src/day11/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

describe('Day 11: Corporate Policy', function () {
    const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});

    describe('Password finder', function() {
        it('Finds the next password', function() {
            expect(password("abcdefgh")).to.be.equal("abcdffaa");
            expect(password("ghijklmn")).to.be.equal("ghjaabcc");
        });
    });

    describe('Part 1 - Next password', function() {
        it('Input file', function() {
            expect(part1(file)).to.be.equal('cqjxxyzz');
        });
    });

    describe('Part 2 - Second next password', function() {
        it('input', function() {
            expect(part2(file)).to.be.equal('cqkaabcc');
        });
    });
});

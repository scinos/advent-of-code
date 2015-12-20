"use strict";

const expect = require('chai').expect;
const fs = require('fs');
const divisors = require('../../src/day20/divisors.js');
const part1 = require('../../src/day20/part1.js');
const part2 = require('../../src/day20/part2.js');

describe('Day 20: Infinite Elves and Infinite Houses', function () {
    describe('Divisors', function() {
        it('Find the divisors', function() {
            expect(divisors(1)).to.deep.equal([1]);
            expect(divisors(100)).to.deep.equal([1, 2, 4, 5, 10, 20, 25, 50, 100]);
        });
        it('Find the divisors without sorting the result', function() {
            expect(divisors(100, false)).to.deep.equal([1, 100, 2, 50, 4, 25, 5, 20, 10]);
        });
    });

    describe('Part 1 - Lowest house with enough presents', function() {
        const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});

        it('Finds the house', function() {
            expect(part1(file)).to.be.equal(786240);
        });
    });

    describe('Part 2 - Lowest house with enough presents, 50 limit', function() {
        const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});

        it('Finds the house', function() {
            expect(part2(file)).to.be.equal(831600);
        });
    });
});
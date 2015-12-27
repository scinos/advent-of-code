"use strict";

const extract = require('../../src/day25/extract.js');
const code = require('../../src/day25/code.js');
const position = require('../../src/day25/position.js');
const part1 = require('../../src/day25/part1.js');

const fs = require('fs');
const expect = require('chai').expect;

describe('Day 25: Let It Snow', function () {
    const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});

    it("Extracts the row and column", function() {
        expect(extract('Enter the code at row 2978, column 3083.')).to.deep.equal({
            row: 2978,
            column: 3083
        });
    });

    it("Calculates the next code", function() {
        expect(code(20151125)).to.equal(31916031);
        expect(code(31916031)).to.equal(18749137);
        expect(code(18749137)).to.equal(16080970);
        expect(code(16080970)).to.equal(21629792);
        expect(code(21629792)).to.equal(17289845);
    });

    it("Calculates the position from the row/column", function() {
        expect(position({row: 1, column: 1})).to.equal(1);
        expect(position({row: 1, column: 2})).to.equal(3);
        expect(position({row: 1, column: 3})).to.equal(6);
        expect(position({row: 1, column: 4})).to.equal(10);
        expect(position({row: 1, column: 5})).to.equal(15);
        expect(position({row: 1, column: 6})).to.equal(21);
        expect(position({row: 2, column: 1})).to.equal(2);
        expect(position({row: 2, column: 2})).to.equal(5);
        expect(position({row: 2, column: 3})).to.equal(9);
        expect(position({row: 2, column: 4})).to.equal(14);
        expect(position({row: 2, column: 5})).to.equal(20);
        expect(position({row: 3, column: 1})).to.equal(4);
        expect(position({row: 3, column: 2})).to.equal(8);
        expect(position({row: 3, column: 3})).to.equal(13);
        expect(position({row: 3, column: 4})).to.equal(19);
        expect(position({row: 4, column: 1})).to.equal(7);
        expect(position({row: 4, column: 2})).to.equal(12);
        expect(position({row: 4, column: 3})).to.equal(18);
        expect(position({row: 5, column: 1})).to.equal(11);
        expect(position({row: 5, column: 2})).to.equal(17);
        expect(position({row: 6, column: 1})).to.equal(16);
    });

    it("Fills the code for any row/column", function() {
        expect(part1('Enter the code at row 1, column 1.')).to.equal(20151125);
        expect(part1('Enter the code at row 2, column 2.')).to.equal(21629792);
        expect(part1('Enter the code at row 3, column 3.')).to.equal(1601130);
        expect(part1('Enter the code at row 4, column 4.')).to.equal(9380097);
    });

    it("Part 1: Fill code", function() {
        expect(part1(file)).to.equal(2650453);
    })
});

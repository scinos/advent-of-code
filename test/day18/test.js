"use strict";

const extract = require('../../src/day18/extract.js');
const CA = require('../../src/day18/ca.js');
const part1 = require('../../src/day18/part1.js');
const part2 = require('../../src/day18/part2.js');

const fs = require('fs');
const expect = require('chai').expect;

describe('Day 18: Like a GIF For Your Yard', function () {
    describe("Initial State Extractor", function() {
        it ("Extracts the initial state", function() {
            expect(extract('#.\n.#')).to.deep.equal([[1, 0], [0, 1]]);
        });
    });

    describe("CA", function() {
        it ("Iterates", function() {
            let ca;

            ca = new CA([[0,1],[1,0]]);
            ca.iterate();
            expect(ca.getState()).to.deep.equal([[0,0],[0,0]]);

            ca = new CA([[1,1],[1,0]]);
            ca.iterate();
            expect(ca.getState()).to.deep.equal([[1,1],[1,1]]);
        })

        it("Example from the page", function() {
            const ca = new CA([
                [0,1,0,1,0,1],
                [0,0,0,1,1,0],
                [1,0,0,0,0,1],
                [0,0,1,0,0,0],
                [1,0,1,0,0,1],
                [1,1,1,1,0,0]
            ]);

            ca.iterate();
            expect(ca.getState()).to.deep.equal([
                [0,0,1,1,0,0],
                [0,0,1,1,0,1],
                [0,0,0,1,1,0],
                [0,0,0,0,0,0],
                [1,0,0,0,0,0],
                [1,0,1,1,0,0]
            ]);

            ca.iterate();
            expect(ca.getState()).to.deep.equal([
                [0,0,1,1,1,0],
                [0,0,0,0,0,0],
                [0,0,1,1,1,0],
                [0,0,0,0,0,0],
                [0,1,0,0,0,0],
                [0,1,0,0,0,0]
            ]);

            ca.iterate();
            expect(ca.getState()).to.deep.equal([
                [0,0,0,1,0,0],
                [0,0,0,0,0,0],
                [0,0,0,1,0,0],
                [0,0,1,1,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0]
            ]);

            ca.iterate();
            expect(ca.getState()).to.deep.equal([
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,1,1,0,0],
                [0,0,1,1,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0]
            ]);
        });
    });

    describe("Part 1 - ON Lights after 100 steps", function() {
        it("Input file", function() {
            let result = part1(fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'}));
            expect(result).to.equal(1061);
        });
    });

    describe("Part 2 - ON Lights after 100 steps (+4 corners)", function() {
        it("Input file", function() {
            let result = part2(fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'}));
            expect(result).to.equal(1006);
        });
    });

});

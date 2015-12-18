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
            expect(extract('#')).to.deep.equal([1]);
            expect(extract('.')).to.deep.equal([0]);
            expect(extract('#.\n.#')).to.deep.equal([1, 0, 0, 1]);
        });
    });

    describe("CA", function() {
        it("Converts linear coord to matrix coords", function() {
            const ca = new CA([0,0,0,0,0,0,0,0,0], 3);

            expect(ca.linerToMatrix(0)).to.deep.equal([0,0]);
            expect(ca.linerToMatrix(1)).to.deep.equal([1,0]);
            expect(ca.linerToMatrix(2)).to.deep.equal([2,0]);
            expect(ca.linerToMatrix(3)).to.deep.equal([0,1]);
            expect(ca.linerToMatrix(4)).to.deep.equal([1,1]);
            expect(ca.linerToMatrix(5)).to.deep.equal([2,1]);
            expect(ca.linerToMatrix(6)).to.deep.equal([0,2]);
            expect(ca.linerToMatrix(7)).to.deep.equal([1,2]);
            expect(ca.linerToMatrix(8)).to.deep.equal([2,2]);
        });

        it("Converts matrix coords to linear coords", function() {
            const ca = new CA([0,0,0,0,0,0,0,0,0], 3);

            expect(ca.matrixToLinear([0,0])).to.deep.equal(0);
            expect(ca.matrixToLinear([1,0])).to.deep.equal(1);
            expect(ca.matrixToLinear([2,0])).to.deep.equal(2);
            expect(ca.matrixToLinear([0,1])).to.deep.equal(3);
            expect(ca.matrixToLinear([1,1])).to.deep.equal(4);
            expect(ca.matrixToLinear([2,1])).to.deep.equal(5);
            expect(ca.matrixToLinear([0,2])).to.deep.equal(6);
            expect(ca.matrixToLinear([1,2])).to.deep.equal(7);
            expect(ca.matrixToLinear([2,2])).to.deep.equal(8);
        });

        it("Gets the neighbors", function() {
            const ca = new CA([0,1,0,1,1,0,0,0,0], 3);

            expect(ca.getNeighbors(0)).to.deep.equal([
                0, 0, 0, 0, 1, 0, 1, 1
            ]);
            expect(ca.getNeighbors(1)).to.deep.equal([
                0, 0, 0, 0, 0, 1, 1, 0
            ]);
            expect(ca.getNeighbors(2)).to.deep.equal([
                0, 0, 0, 1, 0, 1, 0, 0
            ]);
            expect(ca.getNeighbors(3)).to.deep.equal([
                0, 0, 1, 0, 1, 0, 0, 0
            ]);
            expect(ca.getNeighbors(4)).to.deep.equal([
                0, 1, 0, 1, 0, 0, 0, 0
            ]);
            expect(ca.getNeighbors(5)).to.deep.equal([
                1, 0, 0, 1, 0, 0, 0, 0
            ]);
            expect(ca.getNeighbors(6)).to.deep.equal([
                0, 1, 1, 0, 0, 0, 0, 0
            ]);
            expect(ca.getNeighbors(7)).to.deep.equal([
                1, 1, 0, 0, 0, 0, 0, 0
            ]);
            expect(ca.getNeighbors(8)).to.deep.equal([
                1, 0, 0, 0, 0, 0, 0, 0
            ]);
        });

        it ("Iterates", function() {
            let ca;

            ca = new CA([1,1,0,0]);
            ca.iterate();
            expect(ca.state).to.deep.equal([0,0,0,0]);

            ca = new CA([1,1,1,0], 2);
            ca.iterate();
            expect(ca.state).to.deep.equal([1,1,1,1]);
        })

        it("Example from the page", function() {
            const ca = new CA([
                0,1,0,1,0,1,
                0,0,0,1,1,0,
                1,0,0,0,0,1,
                0,0,1,0,0,0,
                1,0,1,0,0,1,
                1,1,1,1,0,0
            ], 6);

            ca.iterate();
            expect(ca.state).to.deep.equal([
                0,0,1,1,0,0,
                0,0,1,1,0,1,
                0,0,0,1,1,0,
                0,0,0,0,0,0,
                1,0,0,0,0,0,
                1,0,1,1,0,0
            ]);

            ca.iterate();
            expect(ca.state).to.deep.equal([
                0,0,1,1,1,0,
                0,0,0,0,0,0,
                0,0,1,1,1,0,
                0,0,0,0,0,0,
                0,1,0,0,0,0,
                0,1,0,0,0,0
            ]);

            ca.iterate();
            expect(ca.state).to.deep.equal([
                0,0,0,1,0,0,
                0,0,0,0,0,0,
                0,0,0,1,0,0,
                0,0,1,1,0,0,
                0,0,0,0,0,0,
                0,0,0,0,0,0
            ]);

            ca.iterate();
            expect(ca.state).to.deep.equal([
                0,0,0,0,0,0,
                0,0,0,0,0,0,
                0,0,1,1,0,0,
                0,0,1,1,0,0,
                0,0,0,0,0,0,
                0,0,0,0,0,0
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

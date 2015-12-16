"use strict";

const extract = require('../../src/day15/extract.js');
const partitions = require('../../src/day15/partition.js');
const part1 = require('../../src/day15/part1.js');
const part2 = require('../../src/day15/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

describe('Day 15: Science for Hungry People', function () {
    describe("Spec extractor", function() {
        it ("Extracts the specs", function() {
            let spec = "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8";
            expect(extract(spec)).to.deep.equal([
                'Butterscotch',
                -1,
                -2,
                6,
                3,
                8
            ]);
        });
    });

    describe("Partitions", function() {
        it ("Generates the partitions (size 2)", function() {
            let p = Array.from(partitions(2, 5));
            expect(p).to.deep.equal([
                [0,5],
                [1,4],
                [2,3],
                [3,2],
                [4,1],
                [5,0]
            ]);
        });

        it ("Generates the partitions (size 3)", function() {
            let p = Array.from(partitions(3, 5));
            expect(p).to.deep.equal([
                [0,0,5], [0,1,4], [0,2,3], [0,3,2], [0,4,1], [0,5,0],
                [1,0,4], [1,1,3], [1,2,2], [1,3,1], [1,4,0],
                [2,0,3], [2,1,2], [2,2,1], [2,3,0],
                [3,0,2], [3,1,1], [3,2,0],
                [4,0,1], [4,1,0],
                [5,0,0]
            ]);
        });
    });

    describe("Part 1 - Total score", function() {
        it("Example from the page", function() {
            let result = part1([
                "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8",
                "Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3"
            ].join('\n'))

            expect(result).to.deep.equal([
                {"Butterscotch": 44, "Cinnamon": 56},
                62842880
            ]);
        });

        it("Input file", function() {
            let result = part1(fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'}));
            expect(result).to.deep.equal([
                {Sprinkles: 28, PeanutButter: 35, Frosting: 18, Sugar: 19},
                13882464
            ]);
        });
    });

    describe("Part 2 - Total score with 500 calories", function() {
        it("Example from the page", function() {
            let result = part2([
                "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8",
                "Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3"
            ].join('\n'))

            expect(result).to.deep.equal([
                {"Butterscotch": 40, "Cinnamon": 60},
                57600000
            ]);
        });

        it("Input file", function() {
            let result = part2(fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'}));
            expect(result).to.deep.equal([
                {Sprinkles: 27, PeanutButter: 27, Frosting: 15, Sugar: 31},
                11171160
            ]);
        });

    });

});

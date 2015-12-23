"use strict";

const part1 = require('../../src/day14/part1.js');
const part2 = require('../../src/day14/part2.js');
const extract = require('../../src/day14/extract.js');
const reindeer = require('../../src/day14/reindeer.js');
const race = require('../../src/day14/race.js');
const racePoints = require('../../src/day14/racePoints.js');
const expect = require('chai').expect;
const fs = require('fs');

describe('Day 14: Reindeer Olympics', function () {
    const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});

    describe("Spec extractor", function() {
        it ("Extracts the specs", function() {
            let spec = "Dancer can fly 27 km/s for 5 seconds, but then must rest for 132 seconds.";
            expect(extract(spec)).to.deep.equal(
                {name: 'Dancer', speed: 27, duration: 5, rest: 132}
            );
        });
    });

    describe("Reindeer speed calculator", function() {
        it ("Calculates the speed", function() {
            // 1 m/s for 1 sec, no rest
            expect(reindeer(1000, 1, 1, 0)).to.equal(1000);

            // 3 m/s for 1 sec, no rest
            expect(reindeer(1000, 3, 1, 0)).to.equal(3000);

            // 1 m/s for 1 sec, 1 sec rest
            expect(reindeer(1000, 1, 1, 1)).to.equal(500);

            //Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
            expect(reindeer(1000, 14, 10, 127)).to.equal(1120);

            //Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.
            expect(reindeer(1000, 16, 11, 162)).to.equal(1056);
        });
    });

    describe("Race outcome", function() {
        it ("Calculates the race outcome", function() {
            let result = race(1000, [
                {name: 'Comet', speed: 14, duration: 10, rest: 127},
                {name: 'Dancer', speed: 16, duration: 11, rest: 162},
            ]);
            expect(result).to.deep.equal([
                { name: 'Comet', distance: 1120 }
            ]);
        });

        it ("Calculates the race outcomes with duplicates", function() {
            let result = race(30, [
                {name: 'Comet', speed: 14, duration: 10, rest: 100},
                {name: 'Dancer', speed: 7, duration: 20, rest: 100},
            ]);
            expect(result).to.deep.equal([
                { name: 'Comet', distance: 140 },
                { name: 'Dancer', distance: 140 }
            ]);
        });

    });

    describe('Part 1 - Distance traveled by the winner', function() {
        it('Input file', function() {
            expect(part1(file)).to.equal(2640);
        });
    });

    describe('Part 2 - Points traveled by the winner', function() {
        it("Example from the page", function() {
            let result = racePoints(1000, [
                {name: 'Comet', speed: 14, duration: 10, rest: 127},
                {name: 'Dancer', speed: 16, duration: 11, rest: 162},
            ]);
            expect(result).to.deep.equal({ name: 'Dancer', distance: 689 });
        });

        it('Input file', function() {
            expect(part2(file)).to.equal(1102);
        });
    });
});

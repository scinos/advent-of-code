"use strict";

const part1 = require('../../src/day14/part1.js');
const part2 = require('../../src/day14/part2.js');
const extract = require('../../src/day14/extract.js');
const reindeer = require('../../src/day14/reindeer.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, length, input, output) {
    expect(fn(length, input.join('\n'))).to.deep.equal(output);
}

function assertFilePart(fn, length, file, output) {
    expect(fn(length, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}))).to.deep.equal(output);
}

describe('Day 14: Reindeer Olympics', function () {
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

    describe('Part 1 - Distance traveled by the winner', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it("Example from the page", function() {
            assert(1000, [
                "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.",
                "Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds."
            ], { name: 'Comet', distance: 1120 });
        });

        it('Input file', function() {
            assertFile(2503, 'input.txt', { name: 'Rudolph', distance: 2640 });
        });
    });

    describe('Part 2 - Points traveled by the winner', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it("Example from the page", function() {
            assert(1000, [
                "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.",
                "Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds."
            ], { name: 'Dancer', distance: 689 });
        });

        it('Input file', function() {
            assertFile(2503, 'input.txt', { name: 'Donner', distance: 1089 });
        });
    });
});

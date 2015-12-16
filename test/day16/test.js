"use strict";

const extract = require('../../src/day16/extract.js');
const expect = require('chai').expect;

describe('Day 16: Aunt Sue', function () {
    describe("Spec extractor", function() {
        it ("Extracts the specs", function() {
            let spec = "Sue 1: cars: 9, akitas: 3, goldfish: 0";
            expect(extract(spec)).to.deep.equal({
                number: 1,
                things: {
                    cars: 9,
                    akitas: 3,
                    goldfish: 0
                }
            });
        });
    });
});

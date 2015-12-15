"use strict";

const part1 = require('../../src/day09/part1.js');
const part2 = require('../../src/day09/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    let result = fn(input);
    expect(result).to.equal(output);
}
function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 9', function () {
    describe('Part 1', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it('Example', function() {
            assert([
                "London to Dublin = 464",
                "London to Belfast = 518",
                "Dublin to Belfast = 141"
            ].join("\n"), 605);
        });

        it('input', function() {
            assertFile('input.txt', 251);
        });
    });

    describe('Part 2', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it('Example', function() {
            assert([
                "London to Dublin = 464",
                "London to Belfast = 518",
                "Dublin to Belfast = 141"
            ].join("\n"), 982);
        });

        it('input', function() {
            assertFile('input.txt', 898);
        });
    });

});

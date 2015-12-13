"use strict";

const part1 = require('../../src/day12/part1.js');
const part2 = require('../../src/day12/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    expect(fn(input)).to.equal(output);
}
function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 12', function () {
    describe('Part 1', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it("examples", function() {
            assert("[1,2,3]", 6);
            assert('{"a":2,"b":4}', 6);
            assert('[[[3]]]', 3);
            assert('{"a":{"b":4},"c":-1}', 3);
            assert('{"a":[-1,1]}', 0);
            assert('[-1,{"a":1}]', 0);
            assert('[]', 0);
            assert('{}', 0);
        });

        it('input', function() {
            assertFile('input.txt', 111754);
        });
    });

    describe('Part 2', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it("examples", function() {
            assert("[1,2,3]", 6);
            assert('[1,{"c":"red","b":2},3]', 4);
            assert('{"d":"red","e":[1,2,3,4],"f":5}', 0);
            assert('[1,"red",5]', 6);
        });

        it('input', function() {
            assertFile('input.txt', 65402);
        });
    });
});

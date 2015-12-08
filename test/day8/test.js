"use strict";

const part1 = require('../../src/day8/part1.js');
const part2 = require('../../src/day8/part2.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    let result = fn(input);
    for (let k in output) {
        expect(result[k]).to.equal(output[k]);
    }
}
function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 8', function () {
    describe('Part 1', function() {
        const assert = assertPart.bind({}, part1);
        const assertFile = assertFilePart.bind({}, part1);

        it('""', function() {
            assert('""', {
                code: 2,
                char: 0
            });
        });

        it('"abc"', function() {
            assert('"abc"', {
                code: 5,
                char: 3
            });
        });

        it('"aaa\\"aaa"', function() {
            assert('"aaa\\"aaa"', {
                code: 10,
                char: 7
            });
        });

        it('"\\x27"', function() {
            assert('"\\x27"', {
                code: 6,
                char: 1
            });
        });

        it('"\\\\abc\\\\"', function() {
            assert('"\\\\abc\\\\"', {
                code: 9,
                char: 5
            });
        });

        it('input', function() {
            assertFile('input.txt', {
                code: 6489,
                char: 5118
            });
        });
    });

    describe('Part 2', function() {
        const assert = assertPart.bind({}, part2);
        const assertFile = assertFilePart.bind({}, part2);

        it('""', function() {
            assert('""', {
                code: 2,
                char: 6
            });
        });

        it('"abc"', function() {
            assert('"abc"', {
                code: 5,
                char: 9
            });
        });

        it('"aaa\\"aaa"', function() {
            assert('"aaa\\"aaa"', {
                code: 10,
                char: 16
            });
        });

        it('"\\x27"', function() {
            assert('"\\x27"', {
                code: 6,
                char: 11
            });
        });

        it('"\\\\abc\\\\"', function() {
            assert('"\\\\abc\\\\"', {
                code: 9,
                char: 17
            });
        });

        it('input', function() {
            assertFile('input.txt', {
                code: 6489,
                char: 5118
            });
        });

    });
});

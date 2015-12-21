"use strict";

const decode = require('../../src/day08/decode.js');
const encode = require('../../src/day08/encode.js');
const part1 = require('../../src/day08/part1.js');
const part2 = require('../../src/day08/part2.js');
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

describe('Day 8: Matchsticks', function () {
    describe('Encode', function() {
        it('Encode strings', function() {
            expect(decode('""')).to.be.equal('');
            expect(decode('"abc"')).to.be.equal('abc');
            expect(decode('"aaa\\"aaa"')).to.be.equal('aaa!aaa');
            expect(decode('"\\x27"')).to.be.equal('@');
            expect(decode('"\\\\abc\\\\"')).to.be.equal('#abc#');
        });
    });

    describe('Decode', function() {
        it('Decodes strings', function() {
            expect(encode('""')).to.be.equal('"\\"\\""');
            expect(encode('"abc"')).to.be.equal('"\\"abc\\""');
            expect(encode('"aaa\\"aaa"')).to.be.equal('"\\"aaa\\\\\\"aaa\\""');
            expect(encode('"\\x27"')).to.be.equal('"\\"\\\\x27\\""');
            expect(encode('"\\\\abc\\\\"')).to.be.equal('"\\"\\\\\\\\abc\\\\\\\\\\""');
        });
    });


    describe('Part 1 - Encode strings', function() {
        it('Input file', function() {
            const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});
            const result = part1(file);

            expect(result).to.equal(1371);
        });
    });

    describe('Part 2', function() {
        it('Input file', function() {
            const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});
            const result = part2(file);

            expect(result).to.equal(2117);
        });
    });
});

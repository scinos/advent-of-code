"use strict";

const part1 = require('../../src/day07/part1.js');
const expect = require('chai').expect;
const fs = require('fs');

function assertPart(fn, input, output) {
    let result = fn(input);
    for (let k in output) {
        expect(result[k].getSignal()).to.equal(output[k]);
    }
}
function assertFilePart(fn, file, output) {
    assertPart(fn, fs.readFileSync(__dirname + '/' + file, {encoding: 'utf8'}), output);
}

describe('Day 7', function () {
    describe('Part 1', function() {
        const assert = assertPart.bind({}, part1);

        it('signal', function() {
            assert('123 -> x', {
                x: 123
            });
        });

        it('and', function() {
            assert([
                '123 -> x',
                '456 -> y',
                'x AND y -> d'
            ].join('\n'), {
                x: 123,
                y: 456,
                d: 72
            });
        })

        it('or', function() {
            assert([
                '123 -> x',
                '456 -> y',
                'x OR y -> e'
            ].join('\n'), {
                x: 123,
                y: 456,
                e: 507
            });
        })

        it('lshift', function() {
            assert([
                '123 -> x',
                'x LSHIFT 2 -> f'
            ].join('\n'), {
                x: 123,
                f: 492
            });
        })

        it('rshift', function() {
            assert([
                '456 -> y',
                'y RSHIFT 2 -> g'
            ].join('\n'), {
                y: 456,
                g: 114
            });
        })

        it('not', function() {
            assert([
                '456 -> y',
                'NOT y -> i'
            ].join('\n'), {
                y: 456,
                i: 65079
            });
        })

        it('input', function() {
            const input = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});
            const result = part1(input);

            expect(result['a'].getSignal()).to.deep.equal(956);
        })
    });

    describe('Part 2', function() {
        it('input', function() {
            let input = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});
            input = input.replace('14146 -> b','956 -> b')
            const result = part1(input);

            expect(result['a'].getSignal()).to.deep.equal(40149);
        })
    });

});

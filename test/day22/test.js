"use strict";

const extract = require('../../src/day22/extract.js');
const battle = require('../../src/day22/battle.js');
const turn = require('../../src/day22/turn.js');
const spells = require('../../src/day22/spells.js');
const part1 = require('../../src/day22/part1.js');
const part2 = require('../../src/day22/part2.js');

const fs = require('fs');
const expect = require('chai').expect;

describe('Day 22: Wizard Simulator 20XX', function () {
    const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});

    describe("Stats Extractor", function() {
        it ("Extracts the boss stats", function() {
            const {hitPoints, damage} = extract(file);
            expect(hitPoints).to.equal(58);
            expect(damage).to.equal(9);
        });
    });

    describe("Turn calculator", function() {
        it("Detects when the player does not have enough mana to cast the spell", function() {
            let result = turn({
                player: {hitPoints: 10, mana: 1, armor: 0},
                boss: {hitPoints: 1, damage: 2},
                spellId: 0,
                hardMode: false,
                activeSpells: [0,0,0,0,0],
                cost: 30
            });

            expect(result.winner).to.equal(false);
        });

        it("Detects when a acive spell can't be recasted", function() {
            let result = turn({
                player: {hitPoints: 10, mana: 200, armor: 0},
                boss: {hitPoints: 10, damage: 2},
                spellId: 4,
                hardMode: false,
                activeSpells: [0,0,0,0,5],
                cost: 30
            });

            expect(result.winner).to.equal(false);
        });

        it("Computes the damage to the boss", function() {
            let result = turn({
                player: {hitPoints: 10, mana: 200, armor: 0},
                boss: {hitPoints: 10, damage: 1},
                spellId: 0,
                hardMode: false,
                activeSpells: [0,0,0,0,0],
                cost: 1
            });

            expect(result.boss.hitPoints).to.equal(6);
        });

        it("Computes the damage to the player", function() {
            let result = turn({
                player: {hitPoints: 10, mana: 200, armor: 0},
                boss: {hitPoints: 10, damage: 3},
                spellId: 0,
                hardMode: false,
                activeSpells: [0,0,0,0,0],
                cost: 1
            });

            expect(result.player.hitPoints).to.equal(7);
        });

        it("Computes the healing to the player", function() {
            let result = turn({
                player: {hitPoints: 10, mana: 200, armor: 0},
                boss: {hitPoints: 10, damage: 1},
                spellId: 1,
                hardMode: false,
                activeSpells: [0,0,0,0,0],
                cost: 1
            });

            //10 initial points, -1 from the attack, +2 from the healing
            expect(result.player.hitPoints).to.equal(11);
        });

        it("Detects when the boss wins", function() {
            let result = turn({
                player: {hitPoints: 1, mana: 200, armor: 0},
                boss: {hitPoints: 10, damage: 1},
                spellId: 0,
                hardMode: false,
                activeSpells: [0,0,0,0,0],
                cost: 1
            });

            expect(result.winner).to.equal('Boss');
        });

        it("Detects when the player wins", function() {
            const spell = {name: 'Magic Misile', cost: 1, damage: 5};
            let result = turn({
                player: {hitPoints: 10, mana: 200, armor: 0},
                boss: {hitPoints: 1, damage: 1},
                spellId: 0,
                hardMode: false,
                activeSpells: [0,0,0,0,0],
                cost: 1
            });

            expect(result.winner).to.equal('Player');
        });
    });

    describe("Battle simulator", function() {
        it("Solves the battle", function() {
            let result = battle({
                player: {hitPoints: 50, mana: 500, armor: 0},
                boss: {hitPoints: 40, damage: 10},
                hardMode: false,
            })
            expect(result).to.deep.equal(754);
        })
    });

    describe("Part 1 - Normal mode", function() {
        it ("Input file", function() {
            const result = part1(file);
            expect(result).to.equal(1269);
        });
    });

    describe("Part 2 - Hard mode", function() {
        it ("Input file", function() {
            const result = part2(file);
            expect(result).to.equal(1309);
        });
    });
});

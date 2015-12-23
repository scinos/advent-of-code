"use strict";

const extract = require('../../src/day21/extract.js');
const items = require('../../src/day21/items.js');
const battle = require('../../src/day21/battle.js');
const part1 = require('../../src/day21/part1.js');
const part2 = require('../../src/day21/part2.js');

const fs = require('fs');
const expect = require('chai').expect;

describe('Day 21: RPG Simulator 20XX', function () {
    const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});
    const ITEMS = JSON.parse(fs.readFileSync(__dirname + '/items.txt', {encoding: 'utf8'}));

    describe("Stats Extractor", function() {
        it ("Extracts the boss stats", function() {
            const {hitPoints, armor, damage} = extract([
                "Hit Points: 1234",
                "Damage: 12",
                "Armor: 34"
            ].join('\n'));

            expect(hitPoints).to.equal(1234);
            expect(damage).to.equal(12);
            expect(armor).to.equal(34);
        });
    });

    describe("Inventory variations", function() {
        it ("Generates all variations for the inventory", function() {
            let result = Array.from(items(ITEMS));
            expect(result.length).to.equal(
                5        //Just weapons
                + 5*6    //Each weapon + each ring (one)
                + 5*15   //Each weapon + each ring (twice) (15 = 6!/4!2!)
                + 5*5    //Each weapon + each armor
                + 5*5*6  //Each weapon + each armor + each ring (one)
                + 5*5*15 //Each weapon + each armor + each ring (twice) (15 = 6!/4!2!)
            )
        });
    });

    describe("Battle simulator", function() {
        it("Solves the battle", function() {
            let winner;

            winner = battle({
                inventory: [ {cost: 1, damage: 1, armor: 1} ],
                boss: {hitPoints: 100, damage: 1, armor: 1}
            })
            expect(winner).to.deep.equal({winner: 'player', cost: 1});

            winner = battle({
                inventory: [ {cost: 5, damage: 1, armor: 1} ],
                boss: {hitPoints: 100, damage: 1, armor: 1}
            })
            expect(winner).to.deep.equal({winner: 'player', cost: 5});

            winner = battle({
                inventory: [ {cost: 1, damage: 1, armor: 1} ],
                boss: {hitPoints: 100, damage: 3, armor: 1}
            })
            expect(winner).to.deep.equal({winner: 'boss', cost: 1});

        })
    });

    describe("Part 1 - Cheapest win", function() {
        it ("Input file", function() {
            const result = part1(file);
            expect(result).to.equal(78);
        });
    });

    describe("Part 2 - Most expensive loss", function() {
        it ("Input file", function() {
            const result = part2(file);
            expect(result).to.equal(148);
        });
    });
});

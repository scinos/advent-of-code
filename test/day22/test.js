"use strict";

const extract = require('../../src/day22/extract.js');
const battle = require('../../src/day22/battle.js');
const spells = require('../../src/day22/spells.js');
// const items = require('../../src/day22/items.js');

const fs = require('fs');
const expect = require('chai').expect;

describe('Day 22: Wizard Simulator 20XX', function () {
    const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});

    // describe("Stats Extractor", function() {
    //     it ("Extracts the boss stats", function() {
    //         const {hitPoints, damage} = extract(file);
    //         expect(hitPoints).to.equal(58);
    //         expect(damage).to.equal(9);
    //     });
    // });

    describe("Battle calculator", function() {
        it("Detects when the player does not have enough mana to cast the spell", function() {
            const spell = {name: 'Magic Misile', cost: 30, damage: 4};
            let result = battle({
                player: {hitPoints: 10, mana: 20, armor: 30},
                boss: {hitPoints: 10, damage: 2},
                spell: spell,
                hardMode: false,
                activeSpells: []
            });

            expect(result).to.deep.equal({winner: true});
        });

        it("Detects when a acive spell can't be recasted", function() {
            const spell = {name: 'Poison', cost: 30, damage: 4, duration: 2};
            let result = battle({
                player: {hitPoints: 10, mana: 200, armor: 30},
                boss: {hitPoints: 10, damage: 2},
                spell: spell,
                hardMode: false,
                activeSpells: [{name: 'Poison', duration: 2}]
            });

            expect(result).to.deep.equal({winner: true});
        });

        it("Computes the damage to the boss", function() {
            const spell = {name: 'Magic Misile', cost: 1, damage: 5};
            let result = battle({
                player: {hitPoints: 10, mana: 1, armor: 0},
                boss: {hitPoints: 10, damage: 1},
                spell: spell
            });

            expect(result.boss.hitPoints).to.equal(5);
        });

        it("Computes the damage to the player", function() {
            const spell = {name: 'Magic Misile', cost: 1, damage: 5};
            let result = battle({
                player: {hitPoints: 10, mana: 1, armor: 0},
                boss: {hitPoints: 10, damage: 1},
                spell: spell
            });

            expect(result.player.hitPoints).to.equal(9);
        });

        it("Computes the healing to the player", function() {
            const spell = {name: 'Drain', cost: 1, heal: 5, damage: 5};
            let result = battle({
                player: {hitPoints: 10, mana: 1, armor: 0},
                boss: {hitPoints: 10, damage: 1},
                spell: spell
            });

            expect(result.boss.hitPoints).to.equal(5);

            //10 initial points, -1 from the attack, +5 from the healing
            expect(result.player.hitPoints).to.equal(14);
        });

        it("Detects when the boss wins", function() {
            const spell = {name: 'Magic Misile', cost: 1, damage: 5};
            let result = battle({
                player: {hitPoints: 1, mana: 1, armor: 0},
                boss: {hitPoints: 10, damage: 1},
                spell: spell
            });

            expect(result.winner).to.equal('Boss');
        });

        it("Detects when the player wins", function() {
            const spell = {name: 'Magic Misile', cost: 1, damage: 5};
            let result = battle({
                player: {hitPoints: 10, mana: 1, armor: 0},
                boss: {hitPoints: 1, damage: 1},
                spell: spell
            });

            expect(result.winner).to.equal('Player');
        });
    });

    // describe("Inventory variations", function() {
    //     it ("Generates all variations for the inventory", function() {
    //         let result = Array.from(items(ITEMS));
    //         expect(result.length).to.equal(
    //             5        //Just weapons
    //             + 5*6    //Each weapon + each ring (one)
    //             + 5*15   //Each weapon + each ring (twice) (15 = 6!/4!2!)
    //             + 5*5    //Each weapon + each armor
    //             + 5*5*6  //Each weapon + each armor + each ring (one)
    //             + 5*5*15 //Each weapon + each armor + each ring (twice) (15 = 6!/4!2!)
    //         )
    //     });
    // });

    // describe("Battle simulator", function() {
    //     it("Solves the battle", function() {
    //         let winner;

    //         winner = battle({
    //             inventory: [ {cost: 1, damage: 1, armor: 1} ],
    //             boss: {hitPoints: 100, damage: 1, armor: 1}
    //         })
    //         expect(winner).to.deep.equal({winner: 'player', cost: 1});

    //         winner = battle({
    //             inventory: [ {cost: 5, damage: 1, armor: 1} ],
    //             boss: {hitPoints: 100, damage: 1, armor: 1}
    //         })
    //         expect(winner).to.deep.equal({winner: 'player', cost: 5});

    //         winner = battle({
    //             inventory: [ {cost: 1, damage: 1, armor: 1} ],
    //             boss: {hitPoints: 100, damage: 3, armor: 1}
    //         })
    //         expect(winner).to.deep.equal({winner: 'boss', cost: 1});

    //     })
    // });

    // describe("Part 1 - Cheapest win", function() {
    //     it ("Input file", function() {
    //         const result = part1(file);
    //         expect(result).to.equal(78);
    //     });
    // });

    // describe("Part 2 - Most expensive loss", function() {
    //     it ("Input file", function() {
    //         const result = part2(file);
    //         expect(result).to.equal(148);
    //     });
    // });
});

"use strict";

const battle = require('./battle.js');
const SPELLS = require('./spells.js');
const combinations = require('./combinations.js');

const player = {hitPoints: 50, mana: 500, armor: 0};
const boss = {hitPoints: 58, damage: 9};

let spellCombinations = [];
for (let spell in SPELLS) {
    spellCombinations.push([SPELLS[spell]]);
}

let bestCost = Infinity;
let bestCombination = [];
let spellCombination;

while (spellCombination = spellCombinations.pop()) {
    let result = battle({
        player: {hitPoints: player.hitPoints, mana: player.mana, armor: player.armor},
        boss: {hitPoints: boss.hitPoints, damage: boss.damage},
        spells: spellCombination,
        hardMode: true
    });

    if (result === undefined || result === 'Player') {
        let currentCost = spellCombination.reduce( (total, s) => total + s.cost, 0);

        if (result === undefined && currentCost <= bestCost) {
            // If the battle is not over, and the current spell combination is cheaper
            // than the best spell combination, add more variations of this spell
            // combination.
            //console.log("Ongoing battle", spellCombination.length, currentCost);
            for (let spell in SPELLS) {
                spellCombinations.push(spellCombination.concat(SPELLS[spell]));
            }
        } else if (result === 'Player') {
            // If the winner is the player, we don't need to keep expanding this
            // spell combination. Save the spell cobination and update the best
            // cost if needed.
            // console.log("Player winner", spellCombination.length, currentCost);
            if (currentCost < bestCost) {
                bestCost = currentCost;
                bestCombination = spellCombination;
            }
        }
    }
}

console.log(bestCost, bestCombination);

"use strict";

const battle = require('./battle.js');
const SPELLS = require('./spells.js');
const combinations = require('./combinations.js');

const player = {hitPoints: 50, mana: 500, armor: 0};
const boss = {hitPoints: 58, damage: 9};

let bestCost = Infinity;
let bestCombination = null;

let spellCombination = [];
let spellCombinations = [];

for (var i = 0; i < SPELLS.length; i++) {
    spellCombinations.push([SPELLS[i]]);
};

while (spellCombination = spellCombinations.pop()) {
    let currentCost = spellCombination.reduce( (total,s)=>total+s.cost, 0);
    if (currentCost >= bestCost) continue;

    let winner = battle({
        player: {
            hitPoints: player.hitPoints,
            mana: player.mana,
            armor: player.armor
        },
        boss: {
            hitPoints: boss.hitPoints,
            damage: boss.damage
        },
        spells: spellCombination
    });


    if (winner === "Player") {
        // If the winner is the player, the current spell combination is the
        // best so far
        //
        bestCost = currentCost;
        bestCombination = spellCombination;
    } else if (winner === undefined) {
        for (var i = 0; i < SPELLS.length; i++) {
            spellCombinations.push(spellCombination.concat(SPELLS[i]));
        }
    }
}

console.log(bestCost);

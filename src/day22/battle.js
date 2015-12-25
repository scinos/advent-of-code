"use strict";

const turn = require('./turn.js');
const SPELLS = require('./spells.js');

module.exports = spellTemplate => {
    let spellCombinations = [];
    for (let spellId in SPELLS) {
        spellCombinations.push({
            spellId: spellId,
            player: {hitPoints: spellTemplate.player.hitPoints, mana: spellTemplate.player.mana, armor: spellTemplate.player.armor},
            boss: {hitPoints: spellTemplate.boss.hitPoints, damage: spellTemplate.boss.damage},
            activeSpells: [0,0,0,0,0],
            hardMode: spellTemplate.hardMode,
            cost: SPELLS[spellId].cost
        });
    }

    let bestCost = Infinity;
    let spellCombination;

    while (spellCombination = spellCombinations.pop()) {
        let result = turn(spellCombination);
        let currentCost = spellCombination.cost

        if (result.winner === null && currentCost <= bestCost) {
            // If the battle is not over, and the current spell combination is cheaper
            // than the best spell combination, add more variations of this spell
            // combination.
            for (let spellId in SPELLS) {
                spellCombinations.push({
                    spellId: spellId,
                    player: {hitPoints: result.player.hitPoints, mana: result.player.mana, armor: result.player.armor},
                    boss: {hitPoints: result.boss.hitPoints, damage: result.boss.damage},
                    activeSpells: result.activeSpells.slice(),
                    hardMode: spellCombination.hardMode,
                    cost: currentCost + SPELLS[spellId].cost
                });
            }
        } else if (result.winner === 'Player') {
            // If the winner is the player, we don't need to keep expanding this
            // spell combination. Save the spell cobination and update the best
            // cost if needed.
            if (currentCost < bestCost) {
                bestCost = currentCost;
            }
        }
    }

   return bestCost;
}

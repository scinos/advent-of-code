"use strict";

const SPELLS = require('./spells.js');

module.exports = ({player, boss, spellId, hardMode, activeSpells}) => {
    let winner;
    let spell = SPELLS[spellId];

    //Player
    if (winner = applyHardMode()) return response(winner);
    if (winner = processBuffs()) return response(winner);
    if (!isValidCast()) return response(false);
    if (winner = cast()) return response(winner);

    // Boss
    if (winner = processBuffs()) return response(winner);
    if (winner = attack()) return response(winner);

    return response(null);

    function response(winner) {
        return {
            player: player,
            boss: boss,
            activeSpells: activeSpells,
            winner: winner
        }
    }

    function applyHardMode() {
        if (hardMode) {
            player.hitPoints--;
            return getWinner();
        }
    }

    function isValidCast() {
        // If there is no enough mana, the cast is invalid
        if (spell.cost > player.mana) return false;

        // If the spell is already in the queue, the cast is invalid
        if (activeSpells[spellId] > 0) return false;

        return true;
    }

    function cast() {
        // Discount the spell cost
        player.mana -= spell.cost;

        if (spell.duration) {
            activeSpells[spellId] = spell.duration;
        } else {
            // If it is not an effect, process is immediately
            if (spell.damage) boss.hitPoints -= spell.damage;
            if (spell.heal) player.hitPoints += spell.heal;
        }

        // Determine the winner
        return getWinner();
    }

    function attack() {
        // Reduce the armor to the damage, but ensure it is at least 1.
        let damage = Math.max(1, boss.damage-player.armor);

        player.hitPoints -= damage;
        return getWinner();
    }

    function processBuffs() {
        // Always reset the armor. If there is a buff to add armor, we will
        // process it here.
        player.armor = 0;

        for (var i = 0; i < activeSpells.length; i++) {
            // Duration
            let duration = activeSpells[i];
            if (duration <= 0) continue;

            // Process the buff
            let spell = SPELLS[i];
            if (spell.damage) boss.hitPoints -= spell.damage;
            if (spell.mana) player.mana += spell.mana;
            if (spell.armor) player.armor = spell.armor;

            // Duration
            duration--;
            activeSpells[i] = duration;
        };

        return getWinner();
    }

    function getWinner() {
        if (boss.hitPoints <= 0) return 'Player';
        if (player.hitPoints <= 0) return 'Boss'
        return null;
    }
}



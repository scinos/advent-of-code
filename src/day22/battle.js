"use strict";

module.exports = ({player, boss, spells, hardMode = false}) => {
    let winner;
    let activeSpells = [];

    for (let spell of spells) {
        //Player
        if (winner = applyHardMode()) return winner;
        if (winner = processBuffs()) return winner;
        if (winner = cast(spell)) return winner;

        // Boss
        if (winner = processBuffs()) return winner;
        if (winner = attack()) return winner;
    }

    function applyHardMode() {
        if (hardMode) {
            player.hitPoints--;
            return getWinner();
        }
    }

    function cast(spell) {
        // If there is no enough mana, the cast is invalid
        if (spell.cost > player.mana) return true;

        // If the spell is already in the queue, the cast is invalid
        for (var i = 0; i < activeSpells.length; i++) {
            let b = activeSpells[i];
            if (b.duration > 0 && spell.name === b.name) return true;
        }

        // Discount the spell cost
        player.mana -= spell.cost;

        if (spell.duration) {
            // If it is an effect, add it to the queue
            activeSpells.push({
                name: spell.name,
                cost: spell.cost,
                damage: spell.damage,
                heal: spell.heal,
                armor: spell.armor,
                mana: spell.mana,
                duration: spell.duration,
            });
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

        let newActiveSpells = [];


        for (var i = 0; i < activeSpells.length; i++) {
            let buff = activeSpells[i];

            // Process the buff
            buff.duration--;
            if (buff.damage) boss.hitPoints -= buff.damage;
            if (buff.mana) player.mana += buff.mana;
            if (buff.armor) player.armor = buff.armor;

            // If the spell is not over, save if for the next turn
            if (buff.duration > 0) newActiveSpells.push(buff);
        };

        activeSpells = newActiveSpells;

        return getWinner();
    }

    function invalidCast(buff) {
    }

    function getWinner() {
        if (boss.hitPoints <= 0) return 'Player';
        if (player.hitPoints <= 0) return 'Boss'
        return null;
    }

}



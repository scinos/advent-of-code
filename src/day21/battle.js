"use strict";

function battle({player, boss}) {
    while (true) {
        boss.hitPoints = boss.hitPoints - Math.max(1, (player.damage - boss.armor));
        if (boss.hitPoints <= 0 ) return 'player';
        player.hitPoints = player.hitPoints - Math.max(1, (boss.damage - player.armor));
        if (player.hitPoints <= 0 ) return 'boss';
    }
}

module.exports = function({inventory, boss}) {
    let cost = inventory.reduce( (total, item)=> total+item.cost, 0);
    let damage = inventory.reduce( (total, item)=> total+item.damage, 0);
    let armor = inventory.reduce( (total, item)=> total+item.armor, 0);
    let winner = battle({
        boss: {hitPoints: boss.hitPoints, damage: boss.damage, armor: boss.armor},
        player: {hitPoints: 100, damage: damage, armor: armor}
    });
    return {winner, cost};
}
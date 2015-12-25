"use strict";

const extract = require('./extract.js');
const battle = require('./battle.js');

module.exports = input => battle({
    player: {hitPoints: 50, mana: 500, armor: 0},
    boss: extract(input),
    hardMode: true,
})

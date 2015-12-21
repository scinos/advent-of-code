"use strict";

const extract = require('../../src/day21/extract.js');
const items = require('../../src/day21/items.js');
const battle = require('../../src/day21/battle.js');
const fs = require('fs');

module.exports = (itemsFile, input) => {
    const boss = extract(input);
    const inventories = items(JSON.parse(fs.readFileSync(itemsFile, {encoding: 'utf8'})));

    return Array
        .from(inventories)
        .map(inventory => battle({inventory, boss}))
        .filter(result=>result.winner=='boss')
        .sort((a,b)=>b.cost-a.cost)
        [0]
}
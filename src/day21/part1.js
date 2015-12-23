"use strict";

const extract = require('../../src/day21/extract.js');
const items = require('../../src/day21/items.js');
const battle = require('../../src/day21/battle.js');
const fs = require('fs');
const path = require('path');

module.exports = input => {
    const itemsFile = path.join(__dirname, '../../test/day21/items.txt');
    const boss = extract(input);
    const inventories = items(JSON.parse(fs.readFileSync(itemsFile, {encoding: 'utf8'})));

    return Array
        .from(inventories)
        .map(inventory => battle({inventory, boss}))
        .filter(result=>result.winner=='player')
        .sort((a,b)=>a.cost-b.cost)
        [0].cost
}
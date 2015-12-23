"use strict";

const extract = require('./extract.js');
const partitions = require('./partition.js');
const sumIngredients = require('./ingredients.js');

module.exports = input => {
    const ingredients = input.split('\n').map(extract);
    const MAX = 100;

    let maxTotal = 0;
    let result = {};

    for (const partition of partitions(ingredients.length, MAX)) {
        const capacity = sumIngredients(partition, ingredients, 1);
        const durability = sumIngredients(partition, ingredients, 2);
        const flavor = sumIngredients(partition, ingredients, 3);
        const texture = sumIngredients(partition, ingredients, 4);
        const total = capacity * durability * flavor * texture;

        if (total > maxTotal) {
            partition.forEach((n, idx) => result[ingredients[idx][0]] = n)
            maxTotal = total;
        }
    }

    return maxTotal;
}
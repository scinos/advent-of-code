"use strict";

module.exports = function sumProperty(partition, ingredients, property) {
    return Math.max(0, ingredients.reduce(
        (total, ingredient, idx) => total + ingredient[property] * partition[idx]
    , 0));
}
"use strict";

module.exports = input => {
    const inputParts = input.split('\n');
    let [, hitPoints] = inputParts[0].match(/^Hit Points: ([0-9]+)$/).map(Number);
    let [, damage] = inputParts[1].match(/^Damage: ([0-9]+)$/).map(Number);
    return {hitPoints, damage};
}
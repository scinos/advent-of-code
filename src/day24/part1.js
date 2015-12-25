"use strict";

const _ = require('lodash');
const combinations = require('./combinations.js');

const sum = (a,b)=>a+b;
const prod = (a,b)=>a*b;

const gifts = [1, 2, 3, 7, 11, 13, 17, 19, 23, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113 ];
const total = gifts.reduce(sum);
const groupWeight = total/3;

let minSize;
for (minSize = 1; minSize < gifts.length/3; minSize++) {
    let combination = combinations(groupWeight, gifts, minSize).next();
    let combinationIsPossible = combination.done === false;
    if (!combinationIsPossible) continue; //combination not possible, try with the next size

    let rest = _.difference(gifts, combination.value);
    let restCanBeDividedInPackages = combinations(groupWeight, rest, gifts.length).next().done === false;
    if (restCanBeDividedInPackages) break; //found it!
}

let minProd = Infinity;
for (let combination of combinations(groupWeight, gifts, minSize)) {
    let rest = _.difference(gifts, combination);
    let restCanBeDividedInPackages = combinations(groupWeight, rest, gifts.length).next().done === false;
    if (!restCanBeDividedInPackages) continue;

    minProd = Math.min(minProd, combination.reduce(prod));
}

console.log(minProd);

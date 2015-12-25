"use strict";

const _ = require('lodash');
const combinations = require('./combinations.js');

const sum = (a,b)=>a+b;
const prod = (a,b)=>a*b;

const gifts = [1, 2, 3, 7, 11, 13, 17, 19, 23, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113 ];
const total = gifts.reduce(sum);
const groupWeight = total/4;

let minSize;
for (minSize = 1; minSize < gifts.length/3; minSize++) {
    let combinationGroup1 = combinations(groupWeight, gifts, minSize).next();
    let combinationGroup1IsPossible = combinationGroup1.done === false;
    if (!combinationGroup1IsPossible) continue; //combination not possible, try with the next size

    let restAfterGroup1 = _.difference(gifts, combinationGroup1.value);
    let combinationGroup2 = combinations(groupWeight, restAfterGroup1, gifts.length).next();
    let combinationGroup2IsPossible = combinationGroup2.done === false;
    if (!combinationGroup2IsPossible) continue; //can't form a second group, this minSize is not valid

    let restAfterGroup2 = _.difference(gifts, combinationGroup2.value);
    let combinationGroup3 = combinations(groupWeight, restAfterGroup2, gifts.length).next();
    let combinationGroup3IsPossible = combinationGroup3.done === false;
    if (!combinationGroup3IsPossible) continue; //can't form a third group, this minSize is not valid

    break; // found it!
}

let minProd = Infinity;
for (let combination of combinations(groupWeight, gifts, minSize)) {

    let restAfterGroup1 = _.difference(gifts, combination);
    let combinationGroup2 = combinations(groupWeight, restAfterGroup1, gifts.length).next();
    let combinationGroup2IsPossible = combinationGroup2.done === false;
    if (!combinationGroup2IsPossible) continue; //can't form a second group, this minSize is not valid

    let restAfterGroup2 = _.difference(gifts, combinationGroup2.value);
    let combinationGroup3 = combinations(groupWeight, restAfterGroup2, gifts.length).next();
    let combinationGroup3IsPossible = combinationGroup3.done === false;
    if (!combinationGroup3IsPossible) continue; //can't form a third group, this minSize is not valid

    minProd = Math.min(minProd, combination.reduce(prod));
}

console.log(minProd);
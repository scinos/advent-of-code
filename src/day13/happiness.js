"use strict";

module.exports = (people, variation) => variation.reduce( (result, val, idx) => {
    let nextVal = variation[idx+1] || variation[0];
    return result + people[val].people[nextVal];
}, 0);

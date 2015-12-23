"use strict";

const proc = require('./process.js');
const extract = require('./extract.js');

function addMyself(people) {
    people['me'] = {name: 'me', people: {} };
    for (let name in people) {
        people[name].people['me'] = 0;
        people['me'].people[name] = 0;
    }
    return people;
}

module.exports = input => proc(addMyself(extract(input)));

"use strict";
const sumNumbers = require('./sumNumbers.js');
module.exports = json => sumNumbers(JSON.parse(json), data => {
    for (let k in data) {
        if (data[k]==="red") return false;
    }
    return true;
});
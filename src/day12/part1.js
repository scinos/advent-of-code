"use strict";
const sumNumbers = require('./sumNumbers.js');
module.exports = json => sumNumbers(JSON.parse(json), data => true);
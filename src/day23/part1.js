"use strict";

const extract = require('../../src/day23/extract.js');
const executor = require('../../src/day23/executor.js');

module.exports = input => executor(extract(input), {a: 0, b: 0}).b;

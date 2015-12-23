"use strict";

const proc = require('./process.js');
const extract = require('./extract.js');

module.exports = input => proc(extract(input));

"use strict";
const measures = require('./measures.js');

module.exports = fn => input => input
        .split("\n")
        .map(measures)
        .reduce( (total, [l, w, h]) => total + fn(l, w, h), 0);

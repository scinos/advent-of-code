"use strict";
const proc = require('./process.js');
module.exports = proc((l, w, h) => l*2 + w*2 + l*w*h);

"use strict";
const proc = require('./process.js');
module.exports = proc((l, w, h) => 2*l*w + 2*w*h + 2*h*l + l*w);
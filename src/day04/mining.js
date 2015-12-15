"use strict";

const md5 = require('md5');

module.exports = (size, seed) => {
    const re = RegExp("^0{"+size+"}");
    let i = 1;
    while (!re.test(md5(seed + (++i))));
    return i;
}
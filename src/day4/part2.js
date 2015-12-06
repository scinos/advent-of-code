"use strict";

const md5 = require('md5');
const re = /^0{6}/;

module.exports = input => {
    let i = 1;
    while(!re.test(md5(input + (i++))));
    return (i-1);
}
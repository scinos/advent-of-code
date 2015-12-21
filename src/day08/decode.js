"use strict";

module.exports = input => input
    .replace(/\\\\/g,'#')
    .replace(/\\"/g,'!')
    .replace(/"/g,'')
    .replace(/\\x[0-9a-z]{2}/g,'@');


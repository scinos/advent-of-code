"use strict";

const password = require('./password.js');

module.exports = function(input) {
    return password(password(input));
}
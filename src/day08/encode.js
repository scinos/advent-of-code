"use strict";

module.exports = input => {
    let r = input.replace(/\\/g,'\\\\') .replace(/"/g, '\\"')
    return '"'+r+'"';
}


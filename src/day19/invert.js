"use strict";


module.exports = replacements => {
    let result = [];

    for (let from in replacements) {
        let replacement = replacements[from];
        for (let to of replacements[from]) {
            result.push({from:to, to:from})
        }
    }

    return result.sort((a,b) => b.from.length-a.from.length);
}
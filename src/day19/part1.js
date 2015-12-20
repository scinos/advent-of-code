"use strict";

const extract = require('./extract.js');

module.exports = (input) => {
    const {replacements, molecule} = extract(input);
    const results = {};

    for (let from in replacements) {
        const replacement = replacements[from];
        for (let to of replacements[from]) {
            const re = RegExp(from, 'g');

            molecule.replace(re, function(from, pos) {
                const result = molecule.substring(0, pos) + to + molecule.substring(pos + from.length);
                // console.log(result);
                if (!results[result]) results[result]=0;
                results[result]++;
            })
        }
    }

    return Object.keys(results).length;
}
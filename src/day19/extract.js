"use strict";

function extractReplacements(input) {
    const reReplacements = /^([A-Za-z]+?) => ([A-Za-z]+?)$/

    const replacements = {};
    input.split('\n').forEach(replacement => {
        let [, from, to] = reReplacements.exec(replacement);
        if (!replacements[from]) replacements[from]=[];
        replacements[from].push(to);
    })
    return replacements;
}


module.exports = input => {
    const inputParts = input.split('\n\n');
    const replacements = extractReplacements(inputParts[0]);
    const molecule = inputParts[1]

    return {replacements, molecule};
}
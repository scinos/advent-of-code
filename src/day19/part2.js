"use strict";

const extract = require('../../src/day19/extract.js');
const invert = require('../../src/day19/invert.js');

module.exports = input => {
    let {replacements, molecule} = extract(input);
    replacements = invert(replacements);

    let queue = [{
        source: molecule,
        step: 0
    }];
    let candidate;

    while(candidate = queue.pop()) {
        let {source, step} = candidate;
        if (source === "e") break;

        for (let replacement of replacements) {
            const re = RegExp(replacement.from, 'g');
            source.replace(re, function(from, pos, source) {
                queue.push({
                    source: source.substring(0, pos) + replacement.to + source.substring(pos + from.length),
                    step: step+1
                });
            })
        }

        queue = queue.sort((a,b) => b.source.length - a.source.length);
    }

    return candidate.step;
}
"use strict";

module.exports = input => {
    const lines = input.split("\n");
    const re = /^([0-9]+)x([0-9]+)x([0-9]+)$/;
    let paper = 0;

    lines.forEach(line => {
        let [, l, w, h] = re.exec(line);
        let m = [l,w,h].sort( (a,b) => a - b );

        paper += (2*l*w + 2*w*h + 2*h*l + m[0]*m[1]);
    });

    return paper
};
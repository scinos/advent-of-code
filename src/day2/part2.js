"use strict";

module.exports = input => {
    const lines = input.split("\n");
    const re = /^([0-9]+)x([0-9]+)x([0-9]+)$/;
    let ribbon = 0;

    lines.forEach(line => {
        let [, l, w, h] = re.exec(line);
        let m = [l,w,h].sort( (a,b) => a - b );

        ribbon += m[0]*2 + m[1]*2 + l*w*h;
    });

    return ribbon
};
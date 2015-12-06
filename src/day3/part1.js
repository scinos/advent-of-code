"use strict";

module.exports = input => {
    const coords = [0,0];
    const map = {};
    map["0,0"] = 1;

    Array.prototype.forEach.call(input, d => {
        switch (d) {
            case ">": coords[1]++; break;
            case "<": coords[1]--; break;
            case "^": coords[0]++; break;
            case "v": coords[0]--; break;
        }

        map[coords] = map[coords]+1 || 1;
    })

    return Object.keys(map).length;
}
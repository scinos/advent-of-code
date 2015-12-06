"use strict";

module.exports = input => {
    const coords = [[0,0],[0,0]];
    const map = {};
    map["0,0"] = 2;

    Array.prototype.forEach.call(input, (d, i) => {
        let s = i%2;

        switch (d) {
            case ">": coords[s][1] = coords[s][1]+1; break;
            case "<": coords[s][1] = coords[s][1]-1; break;
            case "^": coords[s][0] = coords[s][0]+1; break;
            case "v": coords[s][0] = coords[s][0]-1; break;
        }

        map[coords[s]] = map[coords[s]]+1 || 1;
    })

    return Object.keys(map).length;
}
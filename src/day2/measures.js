"use strict";
module.exports = line => {
    const re = /^([0-9]+)x([0-9]+)x([0-9]+)$/;
    let [, l, w, h] = re.exec(line);

    // Numerically sort the measures for consistency (similar to rotating
    // the 3D object)
    return [l, w, h]
        .map(n => Number(n))
        .sort((a, b) => a-b)
}
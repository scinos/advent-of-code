"use strict";

module.exports = class CA {
    constructor(state, w) {
        this.state = state;
        this.w = w;
        this.h = state.length/w;
    }

    iterate() {
        this.state = this.state.map((state, c) => {
            const n = this.getNeighbors(c).filter(n=>n===1).length;
            if ( (state === 1 && (n===2 || n===3)) ||
                 (state === 0 && n===3) ) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    getNeighbors(c) {
        const neighbors = [];
        const coords = this.linerToMatrix(c);
        [
            [coords[0]-1, coords[1]-1],
            [coords[0]  , coords[1]-1],
            [coords[0]+1, coords[1]-1],
            [coords[0]-1, coords[1]  ],
            [coords[0]+1, coords[1]  ],
            [coords[0]-1, coords[1]+1],
            [coords[0]  , coords[1]+1],
            [coords[0]+1, coords[1]+1]
        ].forEach(coords => {
            if (this.inRange(coords)) {
                neighbors.push(this.state[this.matrixToLinear(coords)]);
            } else {
                neighbors.push(0);
            }
        })

        return neighbors;
    }

    inRange([x,y]) {
        return x >= 0 && x < this.w &&
               y >= 0 && y < this.h;
    }

    linerToMatrix(c) {
        return [c%this.w, Math.floor(c/this.w)]
    }

    matrixToLinear([x,y]) {
        return y*this.w + x;
    }

}
"use strict";


/**
 * Creates a matrix of size WxH, using 0 for all the values
 */
function matrix(w, h) {
    let m = [];
    for (let x = 0; x < w; x++) {
        let row = m[x] = [];
        for (let y = 0; y < h; y++) {
            row[y] = 0;
        }
    }
    return m;
}

module.exports = class CA {
    constructor(state) {
        this.w = state[0].length;
        this.h = state.length;

        // this.state is a matrix like <state> with a 'ring'
        // of 0 values around.
        this.state = matrix(this.w+2, this.h+2);
        for (let x = 1; x < this.w+1; x++) {
            for (let y = 1; y < this.h+1; y++) {
                this.state[x][y] = state[x-1][y-1];
            }
        };
    }

    /**
     * Returns the actual state of the CA.
     *
     * This is the this.state matrix without the outer ring.
     */
    getState() {
        let state = [];
        for (let x = 1; x < this.w+1; x++) {
            state[x-1] = [];
            for (let y = 1; y < this.h+1; y++) {
                state[x-1][y-1] = this.state[x][y];
            }
        };

        return state;
    }

    iterate() {
        let newState = matrix(this.w+2, this.h+2);

        for (let x = 1; x < this.state.length-1; x++) {
            let row = this.state[x];
            let newRow = newState[x];
            for (let y = 1; y < row.length-1; y++) {
                const n = this.sumNeighbors(x, y);
                const state = this.state[x][y];

                if ( (state === 1 && (n===2 || n===3)) ||
                     (state === 0 && n===3) ) {
                    newRow[y] = 1;
                } else {
                    newRow[y] = 0;
                }
            }
        };
        this.state = newState;
    }

    sumNeighbors(x, y) {
        return this.state[x-1][y-1] +
               this.state[x  ][y-1] +
               this.state[x+1][y-1] +
               this.state[x-1][y  ] +
               this.state[x+1][y  ] +
               this.state[x-1][y+1] +
               this.state[x  ][y+1] +
               this.state[x+1][y+1];
    }

    set(x, y, v) {
        this.state[x+1][y+1]=v;
    }
}
"use strict";

module.exports = function(n, sorted) {
    let result = [];

    for (let i = 1, N = Math.sqrt(n); i<=N; i++) {
        if (n%i == 0) {
            result.push(i);
            let pair = n/i;
            if (pair !== i) {
                result.push(pair);
            }
        }
    }

    if (sorted !== false) return result.sort((a,b)=>a-b);
    return result;
}
"use strict";

module.exports = function* (length, total) {
    function* gen(numbers) {
        let sum = numbers.reduce((sum, i)=> sum+i, 0);

        if (numbers.length === length-1) {
            yield numbers.concat(total - sum);
        } else {
            for (let i = 0; i <= total-sum; i++) {
                yield* gen(numbers.concat(i));
            }
        }
    }
    yield* gen([])
}
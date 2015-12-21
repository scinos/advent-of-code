"use strict";
module.exports = function* (items){
    for (let weapon of items.weapons) {
        yield [weapon]
        for (let armor of items.armors) {
            yield [weapon, armor];

            for (var r1 = 0; r1 < items.rings.length; r1++) {
                let ring1 = items.rings[r1];
                yield [weapon, armor, ring1];

                for (var r2 = r1+1; r2 < items.rings.length; r2++) {
                    let ring2 = items.rings[r2];
                    yield [weapon, armor, ring1, ring2];
                };
            }
        }

        for (var r1 = 0; r1 < items.rings.length; r1++) {
            let ring1 = items.rings[r1];
            yield [weapon, ring1];

            for (var r2 = r1+1; r2 < items.rings.length; r2++) {
                let ring2 = items.rings[r2];
                yield [weapon, ring1, ring2];
            };
        }

    }
}
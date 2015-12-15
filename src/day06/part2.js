"use strict";

module.exports = input => {
    const lines = input.split('\n');

    let lights = [];
    for (let i=0; i<1000; i++) {
        lights[i]=[];
        for (let j=0; j<1000; j++) {
            lights[i][j]=0;
        }
    }

    const re = /^(turn on|toggle|turn off) ([0-9]+),([0-9]+) through ([0-9]+),([0-9]+)$/;
    lines.forEach(line => {
        let [, action, x1, y1, x2, y2] = re.exec(line);

        for (let i=+x1; i<=+x2; i++) {
            for (let j=+y1; j<=+y2; j++) {
                switch (action) {
                    case "turn on": lights[i][j]++; break;
                    case "turn off": lights[i][j]=Math.max(0, lights[i][j]-1); break;
                    case "toggle": lights[i][j]=lights[i][j]+2; break;
                }
            }
        }
    });

    let total = 0;
    for (let i=0; i<1000; i++) {
        for (let j=0; j<1000; j++) {
            total = total + lights[i][j];
        }
    }

    return total;
}

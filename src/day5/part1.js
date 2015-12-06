"use strict";

module.exports = input => {
    const lines = input.split('\n');
    const forbidden = /(ab|cd|pq|xy)/;
    let count = 0;

    lines.forEach(line => {
        let condVowels = 0;
        let condDouble;

        if (forbidden.test(line)) return;

        for (let i = 0; i<line.length; i++) {
            let c = line[i];
            if (c==="a" || c==="e" || c==="i" || c==="o" || c==="u") condVowels++;
            if (!condDouble && i+1<line.length && (c==line[i+1])) condDouble = true;
        }

        if (condVowels>=3 && condDouble) count++;
    })

    return count;
}

"use strict";

const re = /^(.*?): capacity (-?[0-9]+), durability (-?[0-9]+), flavor (-?[0-9]+), texture (-?[0-9]+), calories (-?[0-9]+)$/;
module.exports = input => {
    let [, name, capacity, durability, flavor, texture, calories] = re.exec(input);
    return [
        name,
        Number(capacity),
        Number(durability),
        Number(flavor),
        Number(texture),
        Number(calories)
    ]
}
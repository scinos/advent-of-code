"use strict";

function processNumber(data) {
    return data;
}

function processArray(data, filterObject, iterFn) {
    let sum = 0;
    data.forEach(i => sum += iterFn(i, filterObject));
    return sum;
}

function processObject(data, filterObject, iterFn) {
    if (!filterObject(data)) return 0;
    let sum = 0;
    Object.keys(data).forEach(k => sum += iterFn(data[k], filterObject));
    return sum;
}

function filter(data, filterObject) {
    if (typeof data === "number") return processNumber(data);
    if (Array.isArray(data)) return processArray(data, filterObject, filter);
    if (typeof data === "object") return processObject(data, filterObject, filter);
    return 0;
}

module.exports = (data, filterObject) => filter(data, filterObject);
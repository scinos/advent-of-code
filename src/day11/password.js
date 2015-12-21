"use strict";

const a = ["abcdefghijklmnopqrstuvwxyz"];
const Z = "z".charCodeAt(0);

function replaceAt(str, index, character) {
    return str.substr(0, index) + character + str.substr(index+character.length);
}

function incrementAt(str, index) {
    return replaceAt(str, index, String.fromCharCode(str.charCodeAt(index) + 1));
}

function next(pass, index) {
    if (arguments.length == 1) {
        index = pass.length-1;
    }

    if (pass.charCodeAt(index) === Z ) {
        return next(replaceAt(pass, index, "a"), index-1);
    } else {
        return incrementAt(pass, index);
    }
}

function has3ConsecutiveCharacters(str) {
    for (var i = 0; i < str.length-2; i++) {
        if (
            str.charCodeAt(i) + 1  == str.charCodeAt(i+1) &&
            str.charCodeAt(i) + 2  == str.charCodeAt(i+2)
        ) {
            return true;
        }
    }

    return false;
}

function hasValidCharactersOnly(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "i" || str[i] === "o" || str[i] === "l") return false;
    }

    return true;
}

function hasAPairsOfCharacters(str) {
    let lastCharacter = "";
    let i, h;

    for (i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i+1]) {
            lastCharacter = str[i];
            break;
        }
    }
    if (!lastCharacter) return false;

    for (h = i + 2; h < str.length - 1; h++) {
        if (str[h] === str[h+1] && lastCharacter !== str[h]) {
            return true;
        }
    }
    return false;
}


module.exports = pass => {
    function isValid(pass) {
        return has3ConsecutiveCharacters(pass) &&
               hasValidCharactersOnly(pass) &&
               hasAPairsOfCharacters(pass);
    }

    do {
        pass = next(pass);
    } while(!isValid(pass))

    return pass;

}
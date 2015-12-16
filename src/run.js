#!/usr/bin/env node --harmony --harmony_destructuring --harmony_object
"use strict";

const program = require('commander');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

program
  .usage('[options] <args ...>')
  .option('-d --day <n>', 'Day number', function(val) {
    let v = Number(val).toString();
    return v.length<2 ? "0"+v : v;
  })
  .option('-p --part <n>', 'Part number', parseInt)
  .parse(process.argv);

if (!program.day) {
    program.outputHelp();
    program.optionMissingArgument(program.optionFor('-d'));
}
if (!program.part) {
    program.outputHelp();
    program.optionMissingArgument(program.optionFor('-p'));
}

let part = require(__dirname + "/day" + program.day + "/part" + program.part+".js");

let lines = [];
rl.on('line', line => lines.push(line));
rl.on('close', () => console.log(part.apply(this, [].concat(program.args).concat(lines.join('\n')))));
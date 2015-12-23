Advent of Code solutions
========================

![codeship status](https://codeship.com/projects/92e8c360-8b88-0133-2c21-16cdf1c92cd5/status?branch=master "Codeship Status")


These are my solutions to the [Advent of Code](http://adventofcode.com/) challenge.

Installation
============
Clone the repo and run:

```
npm install
```

Run the tests
=============

All challenges have automated tests to validate the expected response. To run them, execute:

```
npm test
```

Run individual challenges
=========================

There is a generic challenge runner that can run the challenge for an individual day and print the response in the command line. To execute it, run:

```
./src/run.js -d <day> -p <part> < <input_file>
```

Exmaple:

```
./src/run.js -d 1 -p 1 < test/day01/input.txt
```
"use strict";

const extract = require('../../src/day19/extract.js');
const invert = require('../../src/day19/invert.js');
const part1 = require('../../src/day19/part1.js');
const part2 = require('../../src/day19/part2.js');

const fs = require('fs');
const expect = require('chai').expect;


describe('Day 19: Medicine for Rudolph', function () {
    const file = fs.readFileSync(__dirname + '/input.txt', {encoding: 'utf8'});

    describe("Spec Extractor", function() {
        it ("Extracts the initial state", function() {
            const {replacements, molecule} = extract(file);

            expect(molecule).to.equal("CRnCaCaCaSiRnBPTiMgArSiRnSiRnMgArSiRnCaFArTiTiBSiThFYCaFArCaCaSiThCaPBSiThSiThCaCaPTiRnPBSiThRnFArArCaCaSiThCaSiThSiRnMgArCaPTiBPRnFArSiThCaSiRnFArBCaSiRnCaPRnFArPMgYCaFArCaPTiTiTiBPBSiThCaPTiBPBSiRnFArBPBSiRnCaFArBPRnSiRnFArRnSiRnBFArCaFArCaCaCaSiThSiThCaCaPBPTiTiRnFArCaPTiBSiAlArPBCaCaCaCaCaSiRnMgArCaSiThFArThCaSiThCaSiRnCaFYCaSiRnFYFArFArCaSiRnFYFArCaSiRnBPMgArSiThPRnFArCaSiRnFArTiRnSiRnFYFArCaSiRnBFArCaSiRnTiMgArSiThCaSiThCaFArPRnFArSiRnFArTiTiTiTiBCaCaSiRnCaCaFYFArSiThCaPTiBPTiBCaSiThSiRnMgArCaF");
            expect(replacements).to.deep.equal({
                Al: ['ThF', 'ThRnFAr'],
                B:  ['BCa', 'TiB', 'TiRnFAr'],
                Ca: ['CaCa', 'PB', 'PRnFAr', 'SiRnFYFAr', 'SiRnMgAr', 'SiTh'],
                F:  ['CaF', 'PMg', 'SiAl'],
                H:  ['CRnAlAr', 'CRnFYFYFAr', 'CRnFYMgAr', 'CRnMgYFAr', 'HCa', 'NRnFYFAr', 'NRnMgAr', 'NTh', 'OB', 'ORnFAr'],
                Mg: ['BF', 'TiMg'],
                N:  ['CRnFAr', 'HSi'],
                O:  ['CRnFYFAr', 'CRnMgAr', 'HP', 'NRnFAr', 'OTi'],
                P:  ['CaP', 'PTi', 'SiRnFAr'],
                Si: ['CaSi'],
                Th: ['ThCa'],
                Ti: ['BP', 'TiTi'],
                e:  ['HF', 'NAl', 'OMg']
            });
        });
    });

    describe("Spec inverter", function() {
        it ("Invert the specs", function() {
            let {replacements, molecule} = extract(file);
            replacements = invert(replacements);

            expect(replacements).to.deep.equal([
                {from: 'CRnFYFYFAr', to: 'H'  },
                {from: 'SiRnFYFAr',  to: 'Ca' },
                {from: 'CRnFYMgAr',  to: 'H'  },
                {from: 'CRnMgYFAr',  to: 'H'  },
                {from: 'NRnFYFAr',   to: 'H'  },
                {from: 'CRnFYFAr',   to: 'O'  },
                {from: 'SiRnMgAr',   to: 'Ca' },
                {from: 'NRnMgAr',    to: 'H'  },
                {from: 'CRnAlAr',    to: 'H'  },
                {from: 'CRnMgAr',    to: 'O'  },
                {from: 'SiRnFAr',    to: 'P'  },
                {from: 'ThRnFAr',    to: 'Al' },
                {from: 'TiRnFAr',    to: 'B'  },
                {from: 'CRnFAr',     to: 'N'  },
                {from: 'ORnFAr',     to: 'H'  },
                {from: 'PRnFAr',     to: 'Ca' },
                {from: 'NRnFAr',     to: 'O'  },
                {from: 'ThCa',       to: 'Th' },
                {from: 'TiMg',       to: 'Mg' },
                {from: 'SiTh',       to: 'Ca' },
                {from: 'TiTi',       to: 'Ti' },
                {from: 'CaCa',       to: 'Ca' },
                {from: 'CaSi',       to: 'Si' },
                {from: 'SiAl',       to: 'F'  },
                {from: 'NTh',        to: 'H'  },
                {from: 'HCa',        to: 'H'  },
                {from: 'PMg',        to: 'F'  },
                {from: 'HSi',        to: 'N'  },
                {from: 'TiB',        to: 'B'  },
                {from: 'ThF',        to: 'Al' },
                {from: 'BCa',        to: 'B'  },
                {from: 'NAl',        to: 'e'  },
                {from: 'OTi',        to: 'O'  },
                {from: 'CaP',        to: 'P'  },
                {from: 'PTi',        to: 'P'  },
                {from: 'CaF',        to: 'F'  },
                {from: 'OMg',        to: 'e'  },
                {from: 'HP',         to: 'O'  },
                {from: 'BF',         to: 'Mg' },
                {from: 'BP',         to: 'Ti' },
                {from: 'OB',         to: 'H'  },
                {from: 'HF',         to: 'e'  },
                {from: 'PB',         to: 'Ca' }
            ]);
        });
    });

    describe("Part 1 - Machine calibration", function() {
        it ("Count the molecules", function() {
            expect(part1(file)).to.be.equal(535);
        });
    });

    describe("Part 2 - Molecule generation", function() {
        it ("Count the steps to generate the molecule", function() {
            expect(part2(file)).to.be.equal(212);
        });
    });
});

const { expect } = require('chai');
const { generateSoundex, getSoundexCode } = require('../src/soundex');

describe('Soundex Algorithm', () => {

    describe('generateSoundex', () => {
        it('should handle empty strings', () => {
            expect(generateSoundex("")).to.equal("");
        });

        it('should handle single characters', () => {
            expect(generateSoundex("A")).to.equal("A000");
        });
    });

    describe('getSoundexCode', () => {
        it('should return the correct Soundex code for consonants', () => {
            expect(getSoundexCode('B')).to.equal('1');
            expect(getSoundexCode('C')).to.equal('2');
            expect(getSoundexCode('D')).to.equal('3');
            expect(getSoundexCode('L')).to.equal('4');
            expect(getSoundexCode('M')).to.equal('5');
            expect(getSoundexCode('R')).to.equal('6');
        });

        it('should return 0 for vowels and other characters', () => {
            expect(getSoundexCode('A')).to.equal('0');
            expect(getSoundexCode('E')).to.equal('0');
            expect(getSoundexCode('I')).to.equal('0');
            expect(getSoundexCode('O')).to.equal('0');
            expect(getSoundexCode('U')).to.equal('0');
            expect(getSoundexCode('H')).to.equal('0');
            expect(getSoundexCode('W')).to.equal('0');
            expect(getSoundexCode('Y')).to.equal('0');
        });
    });
});

const { expect } = require('chai');
const { generateSoundex } = require('../src/soundex');

describe('Soundex Algorithm', () => {
    describe('generateSoundex', () => {
        it('should return an empty string for empty input', () => {
            expect(generateSoundex('')).to.equal('');
        });

        it('should return the correct Soundex code for single characters', () => {
            expect(generateSoundex('A')).to.equal('A000');
            expect(generateSoundex('B')).to.equal('B000');
        });

        it('should return the correct Soundex code for names', () => {
            expect(generateSoundex('Rama')).to.equal('R163');
            expect(generateSoundex('Rai')).to.equal('R163');
        });

        it('should handle names with repeating letters', () => {
            expect(generateSoundex('Ashcraft')).to.equal('A261');
            expect(generateSoundex('Tymczak')).to.equal('T522');
        });
    });
});

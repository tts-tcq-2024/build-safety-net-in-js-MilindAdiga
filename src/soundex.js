function getSoundexCode(char) {
    char = char.toUpperCase();
    const soundexDict = {
        'B': '1', 'F': '1', 'P': '1', 'V': '1',
        'C': '2', 'G': '2', 'J': '2', 'K': '2', 'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
        'D': '3', 'T': '3',
        'L': '4',
        'M': '5', 'N': '5',
        'R': '6'
    };
    return soundexDict[char] || '0';
}

function padWithZeros(soundex) {
    while (soundex.length < 4) {
        soundex.push('0');
    }
    return soundex;
}

function processCharacter(char, prevCode) {
    let code = getSoundexCode(char);
    return { code, isValid: code !== '0' && code !== prevCode };
}

function removeDuplicatesAndZeros(name) {
    const initialSoundex = [name[0].toUpperCase()];
    const filteredSoundex = name.slice(1)
        .map((char, index) => processCharacter(char, getSoundexCode(name[index])))
        .filter(({ isValid }) => isValid)
        .map(({ code }) => code);

    return initialSoundex.concat(filteredSoundex).slice(0, 4);
}

function generateSoundex(name) {
    if (!name) return '';

    let soundex = removeDuplicatesAndZeros(name);
    soundex = padWithZeros(soundex);

    return soundex.join('');
}

module.exports = {
    getSoundexCode,
    generateSoundex
};

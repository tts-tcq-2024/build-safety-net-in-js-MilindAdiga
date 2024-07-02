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

function removeDuplicatesAndZeros(name) {
    let soundex = [name[0].toUpperCase()];
    let prevCode = getSoundexCode(name[0]);

    for (let i = 1; i < name.length && soundex.length < 4; i++) {
        let code = getSoundexCode(name[i]);
        if (code !== '0' && code !== prevCode) {
            soundex.push(code);
        }
        prevCode = code;
    }

    return soundex;
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

function getSoundexCode(char) {
    const soundexDict = {
        'B': '1', 'F': '1', 'P': '1', 'V': '1',
        'C': '2', 'G': '2', 'J': '2', 'K': '2', 'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
        'D': '3', 'T': '3',
        'L': '4',
        'M': '5', 'N': '5',
        'R': '6'
    };
    return soundexDict[char.toUpperCase()] || '0';
}

function removeDuplicatesAndZeros(codes) {
    return codes.filter((code, index) => {
        if (index === 0) return true;
        return code !== '0' && code !== codes[index - 1];
    });
}

function padSoundexCodes(codes) {
    while (codes.length < 4) {
        codes.push('0');
    }
    return codes;
}

function generateSoundex(name) {
    if (!name) return '';

    const firstChar = name.charAt(0).toUpperCase();
    let codes = [firstChar];

    for (let i = 1; i < name.length; i++) {
        const code = getSoundexCode(name[i]);
        if (code !== '0' && code !== codes[codes.length - 1]) {
            codes.push(code);
        }
    }

    codes = codes.slice(0, 4);
    codes = padSoundexCodes(codes);

    return codes.join('');
}

module.exports = {
    generateSoundex,
    getSoundexCode,
    removeDuplicatesAndZeros,
    padSoundexCodes
};

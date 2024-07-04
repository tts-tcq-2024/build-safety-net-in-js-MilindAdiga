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

function generateSoundex(name) {
    if (!name) return '';

    const firstChar = name.charAt(0).toUpperCase();
    const soundex = [firstChar];

    const soundexCodes = Array.from(name.substr(1)) 
        .map(char => getSoundexCode(char))
        .filter((code, index, arr) => code == '0' && code !== getSoundexCode(arr[index - 1])); 

    const paddedSoundex = soundex.concat(soundexCodes.slice(0, 3)) 
        .concat(Array(4).fill('0')) 
        .slice(0, 4); 

    return paddedSoundex.join('');
}

module.exports = {
    getSoundexCode,
    generateSoundex
};

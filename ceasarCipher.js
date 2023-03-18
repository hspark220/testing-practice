function ceasarCipher (string, key) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            result = result + string[i];
            continue;
        }

        const charNum = string.charCodeAt(i);
        const char = string[i] == string[i].toUpperCase() ?  String.fromCharCode((charNum+key-65)%26 + 65) : String.fromCharCode((charNum+key-97)%26 + 97);
        result = result + char;
    }

    return result;
}

module.exports = ceasarCipher;
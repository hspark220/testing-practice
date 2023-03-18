function capitalize(string) {
    const firstChar = string[0].toUpperCase();
    const restChar = string.slice(1);
    return firstChar + restChar;
}

module.exports = capitalize;
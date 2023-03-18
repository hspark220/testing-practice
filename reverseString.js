function reverseString (string) {
    let reversedString = "";
    for (let i = string.length-1; i >= 0; i--) {
        reversedString = reversedString.concat(string[i]);
    }

    return reversedString;
}
module.exports = reverseString;
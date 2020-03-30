const reverseString = function(ltrString) {
    reversedString =  ''
    for (i = ltrString.length -1; i >= 0; i--) {
        reversedString += ltrString[i]
    };
    return reversedString;
}

module.exports = reverseString

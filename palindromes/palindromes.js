const palindromes = function(word) {
    word = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"")
    let splitString = word.split("")
    let reversedArray = splitString.reverse();
    let joinArray = reversedArray.join("")
    if (joinArray === word){
        return true
    }
    return false
}
module.exports = palindromes

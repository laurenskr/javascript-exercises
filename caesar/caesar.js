
const caesar = function(str, shift) {
    let shiftStr = "";
    for (let i=0; i<str.length; i++){
        strChar = str.charCodeAt(i)
        if (strChar >= 65 && strChar <= 90) {
            let charNum = (strChar % 65)
            let shiftNum = (shift % 26)
            let shiftedStr = ( (charNum + shiftNum) % 26) + 65;
            if (shiftedStr < 65){
                shiftedStr += 26
            }
            shiftStr += String.fromCharCode(shiftedStr)
        } else if (strChar > 90 && strChar <= 122) {
            let charNum = (strChar % 97)
            let shiftNum = (shift % 26)
            let shiftedStr = ( (charNum + shiftNum) % 26) + 97;
            shiftStr += String.fromCharCode(shiftedStr)
        } else shiftStr += str[i]

    }return shiftStr
}
module.exports = caesar



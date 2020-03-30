const repeatString = function(string, num) {
let talkback = ""
if (num < 0) {
return "ERROR" }
for (i = 1; i <= num; i++) {
	talkback += string}
return talkback
}


module.exports = repeatString

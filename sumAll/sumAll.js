const sumAll = function(a,b) {
    let sum = 0;
    let cijfers = Array.from(arguments).sort();
    for (i = cijfers[0]; i <= cijfers[1]; i++) {
        sum += i;
    };
    if ( typeof(a) != "number" || typeof(b) != "number" ) {
        return "ERROR"
    }
    else if ( a >= 0 && b >= 0){
        return sum
    }
    else {
        return "ERROR"
    }
}
    

module.exports = sumAll

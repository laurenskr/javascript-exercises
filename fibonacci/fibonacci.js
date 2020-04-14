const fibonacci = function(fibNum) {
    let fibArray = [1,1];
    if (Number(fibNum) <=0){
        return "OOPS"
    }
    for (let i=1; i < Number(fibNum); i++){
        fibArray.push(fibArray[i-1]+fibArray[i])

    }return fibArray[Number(fibNum)-1]
}

module.exports = fibonacci

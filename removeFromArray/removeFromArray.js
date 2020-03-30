const removeFromArray = function(array, unwanted) {
    let args = Array.from(arguments);
    for (i = 1; i < arguments.length; i++) {
        const index = array.indexOf(args[i]);
        if (index == -1) {
            continue
        }
        array.splice(index, 1);
    };
    return array;
}

module.exports = removeFromArray

function add (a, b) {
	return a + b
}

function subtract (a,b) {
	return a - b
}

function sum (array) {
	return array.reduce((total, current) => total + current, 0)
}

function multiply (array) {
	return array.reduce((accumulator, length) => accumulator * length)
}

function power(a,b) {
	return a ** b
}

function factorial(num) {
	if (num == 0) {
		return 1;
	}
	let factorial = 1; 
	for (num; num > 0; num--){
		factorial *= num;
	}
	return factorial
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

var sum = function(num1, num2){
	return num1 + num2;
};


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

var avg = function(numero1, numero2, numero3){
	return (numero1 + numero2 + numero3)/3;
}


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

var getLength = function(parameter1) {
	return parameter1.length;
}


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function(param1, param2) {
	return param2 > param1;
}


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
var greet = function(Name){
	return 'Hello, ' + Name;
}



// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"


var madlib = function(pm1, pm2, pm3, pm4) {
	return pm1+ ' is a '+pm2+' sentence '+pm3+' I made ' + pm4;
}





// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

var maximum = function max(n1,n2){
    if ( n1 > n2 ) {
    	return	n1
	}else if ( n1 < n2 )
		return n2;
   
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(no1, no2, no3){
    if ( no1 > no2 && no1 > no3 ){
    	return	no1;
	} else if ( no2 > no3 ){
		return no2;
	} else ( no3 )
		return no3;
}


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
var vow = ['a','e','i','o', 'u'];

function isVowel(char){
 	if ( char === vow[0] || char === vow[1] || char === vow[2] || char === vow[3] || char === vow[4]){
	return true;  
}  else {
    return false;
}}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

var cons = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
var doubled=cons.map(function rovarspraket(phrase){
	return phrase +'o'+ phrase;
});


(function rovarspraket(phrase){



// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------


var backwards = function reverse(word){
    return word.split("").reverse().join("");
}


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

var array = ['small', 'medium', 'longest', 'longerest', 'longereryest'];


var findLongest = function findLongestWord(array){
    return function(a,b) {  
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
          return 0
      }[0];}


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}






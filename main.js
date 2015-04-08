// Part 1. 

var tripleFive = function() {
	for(i=1; i<=3; i++) {
		console.log("Five!");
	}
}

tripleFive();

// Part 2.

var lastLetter = function(word) {
	return word[word.length-1];
}

console.log(lastLetter("happy"));

// Part 3.

var square = function(x) {
	return x*x;
}

console.log(square(10));

// Part 4.

var negate = function(x) {

	 return x - x -x;

}

console.log(negate(500));

// Part 5

var toArray = function(a, b, c) {
	var joinThem = [a, b, c];
	return joinThem;
}

console.log(toArray(8, "fun", 9));

// Part 6

var startsWithA = function(word) {

	if(word.toLowerCase()[0] === "a") {
		return true;
	} else {
		return false;
	}

}

 console.log(startsWithA("Aack"));

 // Part 7

var excite = function(word) {

	return word + "!!!";
}


console.log(excite("Happy"));

// Part 8 

var sun = function(strArgument) {
	var lowCase = strArgument.toLowerCase();
	if (lowCase.indexOf("sun") === -1) {
		return false;
	} else {
		return true;
	}
}

console.log(sun("This is awsome!" ));
console.log(sun("various and sundry implements"));

// Part 9

var tiny = function(x) {
	if(x >= 0 && x <= 1) {
		return true;
	} else {
		return false;
	}
}

console.log(tiny(9));
console.log(tiny(.032));

// Part 10

var getSeconds = function(minutes) {
	var minSec = minutes.split(":");
	var min = parseInt(minSec[0]);
	var sec = parseInt(minSec[1]);
	return min * 60 + sec;
}

console.log(getSeconds("03:30"));
console.log(getSeconds("1:30"));
console.log(getSeconds("10:25"));







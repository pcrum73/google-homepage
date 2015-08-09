var maxNumber = 10;
var multipleSum = 0;

for (var i = 0; i < maxNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        multipleSum += i;
    }
}

console.log("The Sum of all multiples of 3 and 5 below " + maxNumber + " is " + multipleSum);
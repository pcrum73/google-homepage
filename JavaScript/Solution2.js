var maxNumber = 4000000;
var multipleSum = 0;
var nextTerm = 1;
var lastTerm = 1;
var sumNum = 0;

while (nextTerm < maxNumber) {
    sumNum = nextTerm + lastTerm;
    if (sumNum % 2 === 0) {
        multipleSum += nextTerm + lastTerm;
    }
    lastTerm = nextTerm;
    nextTerm = sumNum;
    
}

console.log("Sum of even numbers in Fibonacci sequence below " + maxNumber + " is " + multipleSum);
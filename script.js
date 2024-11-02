// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

function min(a, b) { if (a < b) { return a; } else { return b; } } // I'm showing Examples in console.log(min(0, 10)); 
// Outputs: 0 console.log(min(0, -10
// Examples:
console.log(min(0, 10));
 // Outputs: 0
console.log(min(0, -10));
 // Outputs: -10

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

function calculateCircumference(radius)
 {
    const pi = 3.14;
     // This is the approximate value of pi
    return 2 * pi * radius;
     // This is the Circumference formula
}
// Example Output:
console.log(calculateCircumference(5)); // Outputs: 31.4

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

function searchString(char, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
// Example of Outputs:
console.log(searchString('s', 'mississippi')); // Outputs: 4
console.log(searchString('q', 'mississippi')); // Outputs: 0
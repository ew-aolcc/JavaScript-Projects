
// Simple addition
function additionFunction() {
    var addition = 9 + 9;
    document.getElementById("Addition").innerHTML = "9 + 9 = " + addition;
}

// Simple subtraction
function subtractionFunction() {
    var subtraction = 10 - 1;
    document.getElementById("Subtraction").innerHTML = "10 - 1 = " + subtraction;
}

// Simple multiplication
function multiplicationFunction() {
    var multiplication = 10 * 10;
    document.getElementById("Multiplication").innerHTML = "10 * 10 = " + multiplication;
}

// Simple division
function divisionFunction() {
    var division = 12 / 3;
    document.getElementById("Math").innerHTML = "12 / 3 = " + division;
}

// Multiple operations
function bedmasFunction() {
    var bedmas = (1 + 2) * 9 / 3 - 6
    document.getElementById("Math").innerHTML = "1 + 2 * 9 / 3 - 6 = " + bedmas;
}

// Modulus
function modulusFunction() {
    var modulus = 9 % 3;
    document.getElementById("Modulus").innerHTML = "9 % 3 = " + modulus;
}

// Negation
function negationFunction() {
    var negation = 10;
    document.getElementById("Math").innerHTML = "-10 = " + -negation;
}

// Increment by 1
function incrementFunction() {
    var increment = 11;
    increment++;
    document.getElementById("Increment").innerHTML = "11++ = " + increment;
}

// Decrement by 1
function decrementFunction() {
    var decrement = 10;
    decrement--;
    document.getElementById("Decrement").innerHTML = "10-- = " + decrement;
}

// Generate a random number
function randomFunction() {
    var random = Math.random() * 100;
    document.getElementById("Random").innerHTML = "Math.random() = " + random;
}

// Generate the value of pi  using Math Object
function piFunction() {
    var pi = Math.PI;
    document.getElementById("Math").innerHTML = "Math.PI = " + pi;
}

// Generate the square root of a number using Math Object
function squareRootFunction() {
    var squareRoot = Math.sqrt(16);
    document.getElementById("Math").innerHTML = "Math.sqrt(16) = " + squareRoot;
}

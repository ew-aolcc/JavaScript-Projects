
document.write("<h1>JavaScript Coercion</h1>");

// displaying typeof
document.write(`typeof 10 = ${typeof 10}`);

// Coercion of string and number will reuslt in "105"
document.write(`<br> Coercion of "10 + 5" = ${"10" + 5}`);

document.write("<h3>NaN</h3>");
// make the browser display NaN.
document.write(`<br> NaN = ${0/0}`);

// isNaN() function to make the browser display “true.”
document.write(`<br> isNaN(0/0) = ${isNaN("Hi")}`);

// isNaN() function to make the browser display “false.”
document.write(`<br> isNaN(9) = ${isNaN(9)}`);

document.write("<h3>Infinity</h3>");
// display infinity
document.write(`<br> 2E310 = ${2E310}`);

// display negative infinity
document.write(`<br> -3E310 = ${-3E310}`);

document.write("<h3>Boolean</h3>");
// Boolean logic true
document.write(`<br> 10 > 5 = ${10 > 5}`);

// Boolean logic false
document.write(`<br> 10 < 5 = ${10 < 5}`);

// displaying data in the browser console
console.log("Hello World");

document.write("<h3>Double equal</h3>");

// Double equal sign comparison false
document.write(`<br> 10 == 9 = ${10 == 9}`);

// Double equal sign comparison true
document.write(`<br> 10 == "10" = ${10 == "10"}`);

document.write("<h3>Triple equal</h3>");
// Triple equal match the data type and value
document.write(`<br> 10 === 10 = ${10 === 10}`);

// Triple equal different data type and different value
document.write(`<br> 10 === "9" = ${10 === "9"}`);

// Triple equal different data type but the same value for both.
document.write(`<br> 10 === "10" = ${10 === "10"}`);

// Triple equal same data type but a different value for both.
document.write(`<br> 10 === 9 = ${10 === 9}`);

document.write("<h3>Logical Operators</h3>");
// Logical AND
document.write(`<br> 5 && 10 = ${5 && 10}`);

// Logical OR
document.write(`<br> 5 || 0 = ${5 || 0}`);

// Logical NOT true = false
document.write(`<br> !true = ${!true}`);

// Logical NOT false = true
document.write(`<br> !false = ${!false}`);

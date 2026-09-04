// Concat Multiple Strings
function stringConcat() {
    var str1 = "Hello";
    var str2 = "World";

    document.getElementById("ConCat").innerHTML = str1.concat(" ", str2, "!");
}

// String Slice
function stringSlice() {
    var str = "Hello World!";
    document.getElementById("Slice").innerHTML = str.slice(6, 11);
}

// Uppercase a String
function upperCase() {
    var str = "hello world!";
    document.getElementById("Uppercase").innerHTML = str.toUpperCase();
}

// Convert a Number to String
function numberToString() {
    var num = 12345;
    var toStr = num.toString();
    document.getElementById("Number_to_String").innerHTML = `${toStr} is a ${typeof toStr}`
}

// format a number using toPrecision()
function formatNumber() {
    var num = 5.123456;
    document.getElementById("Format_Number").innerHTML = num.toPrecision(2);
}

// Global variable
var x = 10


function addNumber1(){
    // Local variable x
    var x = 99
    document.write("Local x = " + (10 + x) + "<br>")
}

function addNumber2(){
    // reference to the global variable x
    document.write("Global x = " + (10 + x) + "<br>")
}

addNumber1()
addNumber2()

// Function with an intentional error
function debugFunction() {
    var x = 10;

    // Uncaught ReferenceError: y is not defined
    console.log(x + y);
}
debugFunction();

// Function that checks the current hour using if statement
function getGreeting() {
    // Get the current hour (0 - 23) using new Date().getHours()
    let currentHour = new Date().getHours();

    // Use if statement to check if the current time is before 6:00 PM (18:00)
    if (currentHour < 18) {
        document.getElementById("greeting").innerHTML = "Good day! How are you today?";
    }
}


// if else statement function
function ageFunction() {
    var age = document.getElementById("Age").value
    var vote
    if(age >= 18){
        vote = "You are old enough to vote.";
    } else {
        vote = "You are not old enough to vote.";
    }

    // Display the result
    document.getElementById("How_old_are_you").innerHTML = vote;
}

// else if statement time example
function timeFunction() {
    var time = new Date().getHours();
    var greeting;
    if (time < 12) {
        greeting = "Good morning!";
    } else if (time < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.getElementById("Greetings").innerHTML = greeting;
}

// while loop
function whileLoop() {
    var i = 0;
    while (i < 10) {
        document.getElementById("While_Loop").innerHTML += i + "<br>";
        i++;
    }
}

// for loop
function forLoop() {
    var instruments = ["Guitar", "Piano", "Drums", "Bass","Saxophone","Trumpet"];
    var content = "";
    var x = 0
    for (x = 0; x < instruments.length; x++) {
        content += instruments[x] + "<br>";
    }
    document.getElementById("For_Loop").innerHTML = content;
}

// Arrays with let instead of var
function arrayFunction(){
    let catPicture = []
    catPicture[0] = "sleeping"
    catPicture[1] = "eating"
    catPicture[2] = "playing"
    catPicture[3] = "Purring"
    document.getElementById("Array").innerHTML = `In this picture, the cat is ${catPicture[2]}.`
}


// Constant
function constantFunction(){
    const musicalInstrument = {
        type: "guitar",
        brand: "Fender",
        color: "black"
    }

    musicalInstrument.color = "blue"
    musicalInstrument.price = "$900"

    document.getElementById("Constant").innerHTML = `The cost of a ${musicalInstrument.color} ${musicalInstrument.type} was ${musicalInstrument.price}.`
}

// Car Object
let car = {
    make: "Doge",
    model: "Viper",
    year: 2021,
    color: "Red",
    description: function(){
        return `The car is a ${this.year} ${this.color} ${this.make} ${this.model}`
    }
}
document.getElementById("Car_Object").innerHTML = car.description()

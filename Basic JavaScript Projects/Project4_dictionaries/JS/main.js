// simple dictionary
function dictionaryFunction() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 6,
        Sound: "Bark"
    };

    // Delete the key before displaying it
    delete Animal.Sound;

    // Deleting will result in undefined
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

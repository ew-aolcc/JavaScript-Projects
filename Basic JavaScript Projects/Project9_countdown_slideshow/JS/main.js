
// countdown timer
function countDown(){
    var seconds = document.getElementById("Seconds").value;
    var timer = document.getElementById("Timer");

    function tick(){
        seconds = seconds - 1
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if(seconds == -1){
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Loop back to first slide if exceeding max
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Loop to last slide if going below 1
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display current slide and highlight current dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

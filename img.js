
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide and update dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Change the slide every 3 seconds
    setTimeout(showSlides, 3000); // Adjust the time as needed
}
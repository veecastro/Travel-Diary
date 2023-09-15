$(document).ready(function () {
    var currentSlide = 0;
    var totalSlides = $(".carousel-slide").length;

    // Function to show the current slide
    function showSlide() {
        $(".carousel-slides").css("transform", "translateX(" + (-100 * currentSlide) + "%)");
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide();
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide();
    }

    // Attach click event handlers to the buttons
    $(".next-button").click(nextSlide);
    $(".prev-button").click(prevSlide);

    // Optional: Auto-slide to the next slide every 5 seconds
    setInterval(nextSlide, 5000);
});

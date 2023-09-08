$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1, // Number of items to display
        // loop: true, // Disable loop
        margin: 10, // Item margin
        nav: true, // Enable navigation buttons
        dots: true, // Enable navigation dots
        // autoplay: true, // Enable autoplay
        // autoplayTimeout: 5000, // Autoplay interval in milliseconds
        responsive: {
        0: {
            items: 1 // Number of items to display in small screens
        },
        600: {
            items: 2 // Number of items to display in medium screens
        },
        1000: {
            items: 3 // Number of items to display in large screens
        }
        }
    });
    });
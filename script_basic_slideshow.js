document.addEventListener('DOMContentLoaded', function () {
    var slideshow = document.querySelector('.slideshow');
    var slides = document.querySelectorAll('.slideshow img');
    var currentSlide = 0;

    function showSlide(index) {
        slideshow.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000); // Change slide every 2 seconds
});


let currentSlide = 0;
const slides = document.querySelectorAll('.hero-section');
const totalSlides = slides.length;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}
setInterval(nextSlide, 5000); 

showSlide(currentSlide);

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// ===================================================================
// =================Here the hero slider code=========================
// ===================================================================

// let currentSlide = 0;
// const totalSlides = 4; // Total number of slides
// const sliderContainer = document.querySelector('.slider-container');
// const dots = document.querySelectorAll('.dot');

// function updateSlider() {
//   sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
//   dots.forEach((dot, index) => {
//     dot.classList.toggle('active', index === currentSlide);
//   });
// }

// function goToSlide(slideIndex) {
//   currentSlide = slideIndex;
//   updateSlider();
// }

// // Auto slide every 2 seconds
// setInterval(() => {
//   currentSlide = (currentSlide + 1) % totalSlides;
//   updateSlider();
// }, 2000);

// // Initialize the slider
// updateSlider();

// ===============================================================================
// ===============================================================================
// ===============================================================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// ===================================================================
// =================Here the hero slider code=========================
// ===================================================================

let currentSlide = 0;
const totalSlides = 4; // Total number of slides
const sliderContainer = document.querySelector('.slider-container');
const dots = document.querySelectorAll('.dot');

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
}

// Auto slide every 2 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}, 2000);

// Initialize the slider
updateSlider();

// ===============================================================================
// ===============================================================================
// ===============================================================================
// Open the popup form
document.getElementById("openPopup").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "block";
});

// Close the popup form
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "none";
});

// Handle form submission with EmailJS
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      alert("Email sent successfully!");
      document.getElementById("popupForm").style.display = "none";
    }, function(error) {
      alert("Failed to send email: " + error);
    });
});

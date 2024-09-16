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


// =========================================================================
// =======================Partical js=======================================
// =========================================================================





particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 80,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#fffff5"
      },
      "shape": {
          "type": "polygon",
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "polygon": {
              "nb_sides": 10
          },
          "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
          }
      },
      "opacity": {
          "value": 0.2878848460615755,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 6,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
});


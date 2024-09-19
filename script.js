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
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
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
      "speed": 2,
      "direction": "none",
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




//==============================================================================
// --------------------------------Gsap Animation-------------------------------
//==============================================================================

var tl = gsap.timeline();


gsap.from(".immersive-tech .immersive-tech-child2 .immersive-tech-child2-childs", {
  // opacity: 0,
  // scale: 1.2,
  duration: 1,
  y: 400,

  // scrub: 5,
  // stagger: 1,
  scrollTrigger: {
    trigger: ".immersive-tech",
    scroller: "body",
    start: "top 50%",
    end: "top 40%",
    // markers:true,
    scrub: 1
    // delay:.5
  },

});





// gsap.from(".OurSolutions .ind-child12 #ind-card-4s", {
//   opacity: 0,
//   // scale: 1.2,
//   // duration: 1,
//   y: 400,

//   scrub: 5,
//   // stagger: 1,
//   scrollTrigger: {
//     trigger: "#ind-card-4s",
//     scroller: "body",
//     start: "top 80%",
//     end: "top 70%",
//     // markers: true,
//     // scrub: 1
//     // delay:.5
//   },


// });












// gsap.from(".OurSolutions .ind-child12 #ind-card-1s", {
//   opacity: 0,
//   // scale: 1.2,
//   // duration: 1,
//   x: -400,

//   scrub: 5,
//   // stagger: 1,
//   scrollTrigger: {
//     trigger: "#ind-card-1s",
//     scroller: "body",
//     start: "top 80%",
//     end: "top 70%",
//     // markers: true,
//     // scrub: 1
//     // delay:.5
//   },



// });









// gsap.from(".OurSolutions .ind-child12 #ind-card-2s", {
//   opacity: 0,
//   // scale: 1.2,
//   // duration: 1,
//   y: 400,

//   scrub: 5,
//   // stagger: 1,
//   scrollTrigger: {
//     trigger: "#ind-card-2s",
//     scroller: "body",
//     start: "top 70%",
//     end: "top 60%",
//     // markers: true,
//     // scrub: 1
//     // delay:.5
//   },


// });









// gsap.from(".OurSolutions .ind-child12 #ind-card-3s", {
//   opacity: 0,
//   // scale: 1.2,
//   // duration: 1,
//   x: -400,

//   scrub: 5,
//   // stagger: 1,
//   scrollTrigger: {
//     trigger: "#ind-card-3s",
//     scroller: "body",
//     start: "top 80%",
//     end: "top 70%",
//     // markers: true,
//     scrub: 1
//     // delay:.5
//   },

// });





// loading=================

window.onload = function () {
  // Show the div when the page loads
  const tempDiv = document.getElementById('temporaryDiv');
  tempDiv.classList.remove('hidden');

  // Hide the div after 3 seconds
  setTimeout(function () {
    tempDiv.style.display = 'none';
  }, 3000);
};


// =====================================================================
const cards = document.querySelectorAll('.ind-card');

cards.forEach((card) => {
  const slides = card.querySelectorAll('.ind-card-img-slider img');
  let currentSlide = 0;
  slides[currentSlide].style.opacity = '1';

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  };

  // Auto-slide every 3 seconds
  let autoSlideInterval = setInterval(nextSlide, 3000);

  // Event listeners for manual control
  card.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Stop auto-slide on manual interaction
    nextSlide();
  });

  card.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Stop auto-slide on manual interaction
    prevSlide();
  });
});

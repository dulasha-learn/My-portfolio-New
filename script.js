// ✅ Contact Form Submission with Validation and Pop-up
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showPopup("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    showPopup("Please enter a valid email address.");
    return;
  }

  showPopup(`Thank you, ${name}! Your message has been sent successfully.`);
  this.reset();
});

// ✅ Email Validation Function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// ✅ Show Pop-up Function
function showPopup(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");
  popupMessage.textContent = message;
  popup.style.display = "flex";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

// ✅ Dark Mode Toggle
const darkModeButton = document.getElementById("darkModeToggle");
if (darkModeButton) {
  darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
}

// ✅ Typing Text Effect
const texts = ["UI/UX Designer","Web Developer", "Designer", "Researcher","Hard Worker"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  const typingTextElement = document.getElementById('typingText');
  if (typingTextElement) {
    typingTextElement.textContent = letter;
  }

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 150);
  }
})();

// ✅ Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ✅ Testimonial Carousel
let testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === index) t.classList.add("active");
  });
}

if (testimonials.length > 0) {
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 3000);
}

// ✅ Lightbox for Gallery
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (galleryImages.length > 0 && lightbox && lightboxImg && closeBtn) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}


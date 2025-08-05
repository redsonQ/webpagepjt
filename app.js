const menuTo = document.getElementById("menu-to");
const navMenu = document.getElementById("nav-menu");

menuTo.addEventListener("click", () => {
  navMenu.classList.toggle("active"); 
});


window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

window.addEventListener("scroll", function () {
  const a = document.querySelector(".search-a");
  a.classList.toggle("vv", window.scrollY > 50);
});

window.addEventListener("scroll", function () {
  const a = document.querySelector(".profile-a");
  a.classList.toggle("vv", window.scrollY > 50);
});


//
  const scrollBtn = document.getElementById("scrollToTop");

  // Show button after scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


// GALLERY
  const images = [
    "/WEBprjt/im/G1.png",
    "/WEBprjt/im/G2.png",
    "/WEBprjt/im/b17dc13f-cb19-44fa-8d26-22ece2059bc3.png"
    
  ];

  let currentIndex = 1; 

  const galleryContainer = document.querySelector(".gallery-container");
  const mainImg = galleryContainer.querySelector(".main-img");
  const sideImgs = galleryContainer.querySelectorAll(".side-img");

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImages();
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImages();
  });

  function updateImages() {
    const leftIndex = (currentIndex - 1 + images.length) % images.length;
    const rightIndex = (currentIndex + 1) % images.length;

    sideImgs[0].src = images[leftIndex];
    mainImg.src = images[currentIndex];
    sideImgs[1].src = images[rightIndex];
  }

//services

// Fade in services on scroll
const services = document.querySelectorAll('[data-appear]');

function revealServices() {
  services.forEach((service) => {
    const top = service.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) {
      service.style.opacity = '1';
      service.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealServices);
window.addEventListener('load', revealServices);

// Counter
const counters = document.querySelectorAll('.count');
let counterStarted = false;

function startCounters() {
  if (!counterStarted && window.scrollY + window.innerHeight > document.querySelector('#counters').offsetTop) {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 100;

      const updateCounter = () => {
        if (count < target) {
          count += increment;
          counter.textContent = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });

    counterStarted = true;
  }
}

window.addEventListener('scroll', startCounters);

const toggleBtn = document.getElementById("darkModeToggle");
const themeIcon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");

  // Toggle icon
  themeIcon.className = isLight ? "fas fa-sun" : "fas fa-moon";

  // Optional: change button background
  toggleBtn.style.backgroundColor = isLight ? "#f0f0f0" : "#000";
  toggleBtn.style.color = isLight ? "#000" : "#fff";
});


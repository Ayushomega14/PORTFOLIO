// JavaScript for auto image change in project carousel
function initializeProjectCarousel() {
    let currentProjectSlide = 0;
    const projectSlides = document.querySelectorAll('.projects-carousel .carousel-slide');

    function nextProjectSlide() {
        projectSlides[currentProjectSlide].style.display = 'none';
        currentProjectSlide = (currentProjectSlide + 1) % projectSlides.length;
        projectSlides[currentProjectSlide].style.display = 'block';
    }

    function prevProjectSlide() {
        projectSlides[currentProjectSlide].style.display = 'none';
        currentProjectSlide = (currentProjectSlide - 1 + projectSlides.length) % projectSlides.length;
        projectSlides[currentProjectSlide].style.display = 'block';
    }

    setInterval(nextProjectSlide, 3000); // Change image every 3 seconds (3000 milliseconds)
}

// JavaScript for auto image change in hobby carousel
function initializeHobbyCarousel() {
    let currentHobbySlide = 0;
    const hobbySlides = document.querySelectorAll('.hobbies-carousel .carousel-slide');

    function nextHobbySlide() {
        hobbySlides[currentHobbySlide].style.display = 'none';
        currentHobbySlide = (currentHobbySlide + 1) % hobbySlides.length;
        hobbySlides[currentHobbySlide].style.display = 'block';
    }

    function prevHobbySlide() {
        hobbySlides[currentHobbySlide].style.display = 'none';
        currentHobbySlide = (currentHobbySlide - 1 + hobbySlides.length) % hobbySlides.length;
        hobbySlides[currentHobbySlide].style.display = 'block';
    }

    setInterval(nextHobbySlide, 3000); // Change image every 3 seconds (3000 milliseconds)
}
// JavaScript for auto image change in certificate carousel
function initializeCertificateCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.certi-carousel .carousel-slide');

    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    function prevSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    setInterval(nextSlide, 3000); // Change image every 3 seconds (3000 milliseconds)
}

// Call the function to initialize certificate carousel
initializeProjectCarousel();
initializeHobbyCarousel();
initializeCertificateCarousel();
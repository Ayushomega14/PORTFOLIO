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
function initializeCertiCarousel() {
    let currentCertiSlide = 0;
    const certiSlides = document.querySelectorAll('.certi-carousel .carousel-slide');

    function nextCertiSlide() {
        certiSlides[currentCertiSlide].style.display = 'none';
        currentCertiSlide = (currentCertiSlide + 1) % certiSlides.length;
        certiSlides[currentCertiSlide].style.display = 'block';
    }

    function prevCertiSlide() {
        certiSlides[currentCertiSlide].style.display = 'none';
        currentCertiSlide = (currentCertiSlide - 1 + certiSlides.length) % certiSlides.length;
        certiSlides[currentCertiSlide].style.display = 'block';
    }

    setInterval(nextCertiSlide, 3000); // Change image every 3 seconds (3000 milliseconds)
}

// Call the function to initialize certificate carousel
initializeCertiCarousel();
initializeProjectCarousel();
initializeHobbyCarousel();

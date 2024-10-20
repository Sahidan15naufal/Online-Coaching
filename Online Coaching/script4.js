// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').classList.add('fade-out');
    }, 300);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navigasi');
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.JOIN, .begginer');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check

// Search bar enhancement
const searchInput = document.querySelector('.searchbar input');

searchInput.addEventListener('focus', () => {
    searchInput.style.width = '250px';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.width = '200px';
});

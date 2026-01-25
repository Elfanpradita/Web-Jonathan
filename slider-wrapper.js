/* --- 1. Skrip untuk Dark Mode Toggle --- */
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Mode Terang' : 'Mode Gelap';
});

/* --- 2. Skrip untuk Highlight Nav-link saat Scroll --- */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.6 };

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

/* --- 3. Skrip untuk Slider Gambar (PENTING: Tambahkan ini agar jalan) --- */
let currentSlide = 0;
function moveSlide(direction, btn) {
    const wrapper = btn.parentElement.querySelector('.slider-wrapper');
    const slides = wrapper.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
}
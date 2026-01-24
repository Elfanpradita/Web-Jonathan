let currentSlide = 0;

function moveSlide(direction, btn) {
    const wrapper = btn.parentElement.querySelector('.slider-wrapper');
    const slides = wrapper.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    // Loop kembali ke awal jika sudah di akhir, atau sebaliknya
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
}
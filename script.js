/*=== scroll reveal ===*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

/*=== accordion ===*/
const accordionSections = document.querySelectorAll('.accordion-section');

accordionSections.forEach(section => {
    section.addEventListener('click', function () {
        this.classList.toggle('active');

        accordionSections.forEach(otherSection => {
            if (otherSection !== this && otherSection.classList.contains('active')) {
                otherSection.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY;

        if (currentPosition < heroHeight) {
            hideHeaderElements();
        } else {
            showHeaderElements();
        };
    });
});

function hideHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
};

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
};


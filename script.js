// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.padding = '15px 0';
        header.style.background = 'rgba(255, 255, 255, 0.85)';
    }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileClose = document.getElementById('mobile-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

if (mobileToggle && mobileMenu && mobileOverlay) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop scroll
    });
}

function closeMenu() {
    if (mobileMenu && mobileOverlay) {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Resume scroll
    }
}

if (mobileClose) {
    mobileClose.addEventListener('click', closeMenu);
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
}

// Close mobile menu on link click
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Form submission placeholder
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        form.reset();
    });
}

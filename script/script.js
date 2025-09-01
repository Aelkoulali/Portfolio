document.addEventListener('DOMContentLoaded', function() {
    // Add class navbarDark on navbar scroll
    const header = document.querySelector('.navbar');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY >= 100) {
                header.classList.add('navbarDark');
            } else {
                header.classList.remove('navbarDark');
            }
        });
    }

    // Collapse navbar after click on small devices
    const navLinks = document.querySelectorAll('.nav-item');
    const menuToggle = document.getElementById('navbarSupportedContent');
    if (menuToggle) {
        navLinks.forEach((l) => {
            l.addEventListener('click', () => {
                new bootstrap.Collapse(menuToggle).toggle();
            });
        });
    }
});
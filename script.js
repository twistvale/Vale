document.addEventListener('DOMContentLoaded', () => {
    // Select all links in the navigation bar
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default jump behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target section
                window.scrollTo({
                    top: targetElement.offsetTop - document.getElementById('navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Add a class to the body on scroll to indicate when the navbar should be sticky
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

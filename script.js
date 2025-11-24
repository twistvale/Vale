// Initialize the Animate On Scroll (AOS) library
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        // Optional: you can set global settings here
        duration: 1200, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });
});

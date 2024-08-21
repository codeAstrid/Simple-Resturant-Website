// Initialize AOS
AOS.init({
    duration: 1200,
});

// Get the button and the dropdown menu
var btn = document.querySelector('.menu-btn');
var dropdown = document.querySelector('.dropdown-content');

// Add a click event listener to the button
btn.addEventListener('click', function() {
    // Toggle the visibility of the dropdown menu
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

// Close the dropdown menu when clicking outside of it
window.addEventListener('click', function(event) {
    if (!btn.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
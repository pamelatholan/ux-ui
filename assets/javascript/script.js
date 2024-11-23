// Get the elements for the hamburger icon and the nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header'); // To prevent closing when clicking inside the header

// Add click event listener to the hamburger
hamburger.addEventListener('click', (event) => {
    // Prevent the click event from propagating to the document
    event.stopPropagation();

    // Toggle the 'active' class on nav-links to show/hide the menu
    navLinks.classList.toggle('active');
    
    // Hide the hamburger icon when the menu is open
    hamburger.classList.toggle('hidden');
});

// Close the menu if the user clicks outside of the navLinks or hamburger
document.addEventListener('click', (event) => {
    // Check if the click is outside the nav links and the hamburger
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target) && !header.contains(event.target)) {
        // Close the menu by removing the 'active' class and showing the hamburger again
        navLinks.classList.remove('active');
        hamburger.classList.remove('hidden');
    }
});
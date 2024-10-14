// document.getElementById('hamburger').addEventListener('click', function() {
//     const navLinks = document.getElementById('navLinks');
//     navLinks.classList.toggle('active'); // Toggle the 'active' class
// });

// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('navLinks');
// const overlay = document.getElementById('overlay');

// hamburger.addEventListener('click', function() {
//     navLinks.classList.toggle('active'); // Toggle the 'active' class
//     overlay.style.display = navLinks.classList.contains('active') ? 'block' : 'none'; // Show or hide overlay
// });

// // Close menu when clicking on the overlay
// overlay.addEventListener('click', function() {
//     navLinks.classList.remove('active'); // Remove the 'active' class
//     overlay.style.display = 'none'; // Hide overlay
// });



const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', function() {
    event.stopPropagation(); // Prevent the event from bubbling up
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});

// Close the menu when a link is clicked
navLinks.addEventListener('click', function() {
    navLinks.classList.remove('active'); // Remove the 'active' class
});

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    // Check if the click was outside the nav links and hamburger
    if (!navLinks.contains(event.target) && event.target !== hamburger) {
        navLinks.classList.remove('active'); // Remove the 'active' class
    }
});
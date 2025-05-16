document.addEventListener('DOMContentLoaded', function() {
    // Initialize floating tech circles with random positions
    initFloatingTechCircles();
});

// Function to initialize floating tech circles
function initFloatingTechCircles() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach((icon, index) => {
        // Set random starting positions within constraints
        const randomX = Math.floor(Math.random() * 60) - 30;
        const randomY = Math.floor(Math.random() * 60) - 30;
        
        // Apply the random position as a CSS variable
        icon.style.setProperty('--random-x', randomX);
        icon.style.setProperty('--random-y', randomY);
        icon.style.setProperty('--random-x2', randomY * -1);
        icon.style.setProperty('--random-y2', randomX * -1);
        icon.style.setProperty('--random-x3', randomY);
        icon.style.setProperty('--random-y3', randomX * -1);
    });
}

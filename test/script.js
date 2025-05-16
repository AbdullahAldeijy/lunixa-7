document.addEventListener('DOMContentLoaded', () => {
    // Create additional loading circles with different speeds and directions
    createAdditionalCircles();
});

function createAdditionalCircles() {
    const logoContainer = document.querySelector('.logo-container');
    
    // Create a second loading circle that rotates in the opposite direction
    const secondCircle = document.createElement('div');
    secondCircle.classList.add('loading-circle');
    secondCircle.style.width = '100%';
    secondCircle.style.height = '100%';
    secondCircle.style.borderTop = 'none';
    secondCircle.style.borderRight = '4px solid rgba(255, 255, 255, 0.7)';
    secondCircle.style.animation = 'spin 3s linear infinite reverse';
    
    logoContainer.appendChild(secondCircle);
    
    // Create a third loading circle with dashed border
    const thirdCircle = document.createElement('div');
    thirdCircle.classList.add('loading-circle');
    thirdCircle.style.width = '95%';
    thirdCircle.style.height = '95%';
    thirdCircle.style.border = '2px dashed rgba(255, 255, 255, 0.5)';
    thirdCircle.style.animation = 'spin 5s linear infinite';
    
    logoContainer.appendChild(thirdCircle);
}

// Add some interactivity - make the cloud move slightly with mouse movement
document.addEventListener('mousemove', (e) => {
    const cloudImg = document.querySelector('.cloud-img');
    const mountainImg = document.querySelector('.mountain-img');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    
    cloudImg.style.transform = `translateX(calc(-50% + ${xAxis}px)) translateY(calc(${yAxis}px + ${getFloatOffset(0)}px))`;
    mountainImg.style.transform = `translateX(calc(-50% + ${xAxis * 0.5}px)) translateY(calc(${yAxis * 0.5}px + ${getFloatOffset(1)}px))`;
});

// Helper function to get the current float offset based on the animation
function getFloatOffset(offset) {
    const time = Date.now() / 1000;
    const period = offset === 0 ? 3 : 4; // Different periods for cloud and mountain
    const phase = offset === 0 ? 0 : 1; // Different phases
    
    // Create a sine wave that oscillates between -5 and 5 pixels
    return Math.sin((time + phase) * (2 * Math.PI / period)) * 5;
}

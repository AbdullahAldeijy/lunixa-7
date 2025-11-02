// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            // Show loading state
            button.textContent = 'Sending...';
            button.disabled = true;
            
            // Form will submit to Formspree automatically
            // Reset button after a delay
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });
    }
});
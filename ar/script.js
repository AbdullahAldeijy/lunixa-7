// DOM Elements
const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const cloudImage = document.getElementById('cloud-image');
const klothImage = document.getElementById('kloth-image');
const mergeContainer = document.querySelector('.merge-animation-container');
const heroContent = document.querySelector('.hero-content');

// Initialize on document load
document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileMenu();
    initKothAnimation();
    initServiceAnimations();
    initTechIcons();
    initSmoothScrolling();
    initCloudAnimation();
    initContactForm();
});

// Initialize cloud animation
function initCloudAnimation() {
    if (cloudImage) {
        // Cloud is already animated via CSS
        
        // Add text animation class to hero content
        if (heroContent) {
            heroContent.classList.add('animated');
        }
    }
}

// Sticky Header
function initStickyHeader() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
}

// Function to initialize KOTH animation
function initKothAnimation() {
    if (klothImage) {
        // Reset any existing animation
        klothImage.style.opacity = '0';
        klothImage.style.transform = 'translateY(100px)';
        
        // Trigger animation after a short delay
        setTimeout(() => {
            klothImage.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
            klothImage.style.opacity = '1';
            klothImage.style.transform = 'translateY(0)';
        }, 500);
    }
}

// Animate services on scroll
function initServiceAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                
                // Unobserve after animation
                serviceObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Set initial styles and observe service cards
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        serviceObserver.observe(card);
    });
}

// Animate tech icons
function initTechIcons() {
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        // Random animation duration between 3-5 seconds
        const duration = 3 + Math.random() * 2;
        
        // Apply animation
        icon.style.animation = `float ${duration}s ease-in-out infinite`;
        
        // Add random delay to create staggered effect
        icon.style.animationDelay = `${Math.random() * 2}s`;
        
        // Add hover effect with slight rotation
        icon.addEventListener('mouseover', () => {
            icon.style.transform = `translateY(-10px) rotate(${Math.random() * 10 - 5}deg)`;
        });
        
        icon.addEventListener('mouseout', () => {
            icon.style.transform = '';
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize contact form submission handling
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = {
                name: form.elements['name'].value,
                email: form.elements['email'].value,
                message: form.elements['message'].value
            };
            try {
                const response = await fetch('/send-contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    alert('تم إرسال الرسالة بنجاح!');
                    form.reset();
                } else {
                    alert('فشل في إرسال الرسالة. يرجى المحاولة لاحقًا.');
                }
            } catch (error) {
                alert('حدث خطأ. يرجى المحاولة مرة أخرى.');
            }
        });
    }
}

// Add additional animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
    
    @keyframes energyPulse {
        0% { opacity: 0; transform: translate(-50%, -50%) translate(var(--x), var(--y)) scale(0.5); }
        50% { opacity: 1; transform: translate(-50%, -50%) translate(var(--x), var(--y)) scale(1.2); }
        100% { opacity: 0; transform: translate(-50%, -50%) translate(var(--x), var(--y)) scale(0.5); }
    }
`;
document.head.appendChild(style);

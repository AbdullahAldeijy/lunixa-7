// Professional mouse tracking for hero section
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.getElementById('hero');
    
    if (hero) {
        hero.addEventListener('mousemove', function(e) {
            const rect = hero.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            hero.style.setProperty('--mouse-x', x + '%');
            hero.style.setProperty('--mouse-y', y + '%');
        });
    }
});
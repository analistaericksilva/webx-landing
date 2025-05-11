document.addEventListener('DOMContentLoaded', () => {
    // Cursor personalizado
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Animações GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animação do Hero
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animação de Serviços
    gsap.utils.toArray('.service-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Carrossel de Tecnologias
    const techCarousel = document.querySelector('.tech-carousel');
    techCarousel.innerHTML += techCarousel.innerHTML; // Duplica para efeito infinito

    gsap.to('.tech-carousel', {
        x: '-50%',
        ease: 'linear',
        duration: 10,
        repeat: -1
    });

    // Efeito Glitch no Título
    function glitchText() {
        const glitchElements = document.querySelectorAll('.glitch');
        glitchElements.forEach(el => {
            const text = el.textContent;
            el.dataset.text = text;
        });
    }
    glitchText();
});

// Efeito de digitação para subtítulos
function typeWriter(element, text, speed = 50) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}
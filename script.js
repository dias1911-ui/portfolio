// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Fechar menu mobile se aberto
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Efeito na navbar ao fazer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 212, 255, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
    }
});

// Intersection Observer para animações ao entrar em view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
const elementsToAnimate = document.querySelectorAll(
    '.projeto-card, .skill-card, .certificado-card'
);

elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Contadores para skills (animação ao scroll)
let animadoSkills = false;

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animadoSkills) {
                animadoSkills = true;
                animarSkills();
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

function animarSkills() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'slideInUp 0.6s ease-out forwards';
        }, index * 100);
    });
}

// Adicionar data dinâmica no footer
const footerYear = new Date().getFullYear();
const footer = document.querySelector('.footer p');
if (footer) {
    footer.textContent = `© ${footerYear} Dias - Especialista em Redes e Linux. Todos os direitos reservados.`;
}

// Efeito hover nas cards de projeto
const projectCards = document.querySelectorAll('.projeto-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Log de inicialização
console.log('%c🖧 Portfólio Redes e Linux Carregado! 🐧', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('Bem-vindo ao meu portfólio profissional!');

// Detecção de tema preferido do sistema (dark mode)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}
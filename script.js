// ===== FLOATING HEARTS BACKGROUND =====
function createFloatingHearts() {
    const container = document.getElementById('hearts-bg');
    const hearts = ['❤', '💕', '💖', '💗', '♥', '💘', '💝'];

    setInterval(() => {
        const heart = document.createElement('span');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 8 + 6) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 16000);
    }, 800);
}

// ===== FALLING PETALS IN HERO =====
function createPetals() {
    const container = document.getElementById('hero-petals');

    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (Math.random() * 6 + 4) + 's';
        petal.style.animationDelay = Math.random() * 8 + 's';
        petal.style.width = (Math.random() * 10 + 8) + 'px';
        petal.style.height = (Math.random() * 15 + 12) + 'px';
        petal.style.opacity = Math.random() * 0.5 + 0.2;
        container.appendChild(petal);
    }
}

// ===== SCROLL REVEAL ANIMATIONS =====
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe reason cards
    document.querySelectorAll('.reason-card').forEach(card => observer.observe(card));

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));

    // Observe poem verses
    document.querySelectorAll('.poem-verse').forEach(verse => observer.observe(verse));
}

// ===== ACTIVE NAV LINK =====
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ===== NAV BACKGROUND ON SCROLL =====
function initNavScroll() {
    const nav = document.getElementById('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(254, 249, 243, 0.95)';
            nav.style.boxShadow = '0 4px 30px rgba(201, 75, 110, 0.08)';
        } else {
            nav.style.background = 'rgba(254, 249, 243, 0.7)';
            nav.style.boxShadow = 'none';
        }
    });
}

// ===== SPARKLE CURSOR EFFECT =====
function initSparkle() {
    let lastSparkle = 0;

    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSparkle < 80) return;
        lastSparkle = now;

        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';

        const colors = ['#ff6b8a', '#ff8fab', '#ffb3c6', '#d4a574', '#ffd6e0'];
        sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.width = (Math.random() * 4 + 3) + 'px';
        sparkle.style.height = sparkle.style.width;

        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== PARALLAX EFFECT =====
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero-content');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// ===== TYPING EFFECT FOR NAME =====
function initTypingEffect() {
    const nameEl = document.getElementById('beloved-name');
    if (!nameEl) return;

    const text = nameEl.textContent;
    nameEl.textContent = '';
    nameEl.style.opacity = '1';
    nameEl.style.transform = 'translateY(0)';

    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            nameEl.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 120);
}

// ===== LETTER REVEAL ANIMATION =====
function initLetterReveal() {
    const letterPaper = document.querySelector('.letter-paper');
    if (!letterPaper) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const paragraphs = letterPaper.querySelectorAll('.letter-body p');
                paragraphs.forEach((p, i) => {
                    p.style.opacity = '0';
                    p.style.transform = 'translateY(15px)';
                    p.style.transition = `all 0.6s ease ${i * 0.15}s`;

                    setTimeout(() => {
                        p.style.opacity = '1';
                        p.style.transform = 'translateY(0)';
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(letterPaper);
}

// ===== YOUTUBE MUSIC PLAYER =====
let player;
let isMusicPlaying = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'd748E83m6d4', // Joé Dwèt Filé - Mont blanc
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': 'd748E83m6d4' // Required for loop to work
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    const btn = document.getElementById('music-toggle');
    if (btn) {
        btn.addEventListener('click', () => {
            if (isMusicPlaying) {
                player.pauseVideo();
                btn.classList.remove('playing');
                isMusicPlaying = false;
            } else {
                player.playVideo();
                btn.classList.add('playing');
                isMusicPlaying = true;
            }
        });
    }
}

// ===== COUNTER / LOVE COUNTER =====
function initLoveCounter() {
    const finaleSection = document.querySelector('.finale');
    if (!finaleSection) return;

    const message = finaleSection.querySelector('.finale-message');
    if (!message) return;

    const start = new Date('2024-02-14'); // Saint Valentin 2024 start date (example)
    const now = new Date();
    const days = Math.floor((now - start) / (1000 * 60 * 60 * 24));

    // Add a counter line
    const counter = document.createElement('p');
    counter.style.cssText = `
        font-family: 'Cormorant Garamond', serif;
        font-size: 1rem;
        color: var(--rose-300);
        margin-top: 1.5rem;
        opacity: 0.7;
        letter-spacing: 0.1em;
    `;
    counter.textContent = `${days} jours de bonheur avec toi...`;
    message.after(counter);
}

// ===== INIT EVERYTHING =====
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    createPetals();
    initScrollReveal();
    initActiveNav();
    initNavScroll();
    initSmoothScroll();
    initParallax();
    initLetterReveal();
    // initMusicToggle(); // Replaced by YouTube API
    initLoveCounter();

    // Delay typing effect until hero animation is done
    setTimeout(initTypingEffect, 1500);

    // Start sparkle effect
    initSparkle();
});

// ===== Page visibility - pause animations when tab not active =====
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.style.animationPlayState = 'paused';
    } else {
        document.body.style.animationPlayState = 'running';
    }
});

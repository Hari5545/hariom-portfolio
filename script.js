/* ============================================
   HARIOM CHAUHAN PORTFOLIO — script.js
   Features: Loader, Theme Toggle, Typing Animation,
             Scroll Reveal, Skill Bars, Sticky Nav,
             Mobile Menu, Contact Form, Scroll-to-Top
   ============================================ */

/* ===== LOADER ===== */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  // Hide loader after slight delay for effect
  setTimeout(() => {
    loader.classList.add('hidden');
    // Trigger initial reveal animations
    revealOnScroll();
  }, 1200);
});

/* ===== THEME TOGGLE ===== */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');
const html        = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

/* ===== MOBILE MENU ===== */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

/* ===== STICKY NAVBAR ===== */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===== TYPING ANIMATION ===== */
const phrases = [
  'Passionate Developer',
  'AI & Web Enthusiast',
  'Problem Solver',
  'LLM Explorer',
  'Competitive Programmer'
];

let phraseIndex  = 0;
let charIndex    = 0;
let isDeleting   = false;
const typedEl    = document.getElementById('typed-text');
const typeSpeed  = 90;
const deleteSpeed = 50;
const pauseTime  = 1800;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // Typing forward
    typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      // Pause then start deleting
      isDeleting = true;
      setTimeout(typeLoop, pauseTime);
      return;
    }
  } else {
    // Deleting
    typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const delay = isDeleting ? deleteSpeed : typeSpeed;
  setTimeout(typeLoop, delay);
}

// Start typing after loader
setTimeout(typeLoop, 1400);

/* ===== SCROLL REVEAL ===== */
function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  const windowH  = window.innerHeight;

  elements.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowH - 60) {
      // Stagger delay based on sibling index
      const delay = (el.dataset.delay) || 0;
      setTimeout(() => {
        el.classList.add('visible');
        // Trigger skill bars when skills section is revealed
        if (el.classList.contains('skill-category')) {
          animateSkillBars(el);
        }
      }, delay);
    }
  });
}

// Set stagger delays for siblings
document.querySelectorAll('.projects-grid .project-card, .achievements-grid .achievement-card, .skills-grid .skill-category, .timeline-item').forEach((el, i) => {
  el.dataset.delay = i * 100;
});

window.addEventListener('scroll', revealOnScroll, { passive: true });

/* ===== SKILL BARS ANIMATION ===== */
function animateSkillBars(container) {
  const fills = container.querySelectorAll('.skill-fill');
  fills.forEach(fill => {
    const targetWidth = fill.getAttribute('data-w') + '%';
    setTimeout(() => {
      fill.style.width = targetWidth;
    }, 100);
  });
}

/* ===== SCROLL-TO-TOP BUTTON ===== */
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== SMOOTH SCROLL FOR NAV LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navH   = navbar.offsetHeight;
    const top    = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ===== ACTIVE NAV LINK HIGHLIGHT ===== */
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.nav-link');

function highlightNav() {
  let current = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop - navbar.offsetHeight - 80;
    if (window.scrollY >= secTop) current = sec.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });

/* ===== CONTACT FORM (frontend only) ===== */
const contactForm    = document.getElementById('contact-form');
const formSuccess    = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulate form submission
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    formSuccess.classList.add('show');
    contactForm.reset();
    // Reset button after a moment
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      submitBtn.disabled = false;
      formSuccess.classList.remove('show');
    }, 4000);
  }, 1500);
});

/* ===== PROJECT CARD TILT EFFECT (subtle) ===== */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect  = card.getBoundingClientRect();
    const x     = e.clientX - rect.left - rect.width / 2;
    const y     = e.clientY - rect.top - rect.height / 2;
    const rotX  = (-y / rect.height) * 6;
    const rotY  = (x / rect.width) * 6;
    card.style.transform = `translateY(-6px) perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
  });
});

/* ===== HERO GLOW FOLLOW CURSOR ===== */
const heroGlow = document.querySelector('.hero-glow');
if (heroGlow) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    heroGlow.style.background = `radial-gradient(circle at ${x}% ${y}%, var(--accent-glow) 0%, transparent 65%)`;
  }, { passive: true });
}

/* ===== CONSOLE EASTER EGG ===== */
console.log(`%c
██╗  ██╗ █████╗ ██████╗ ██╗ ██████╗ ███╗   ███╗
██║  ██║██╔══██╗██╔══██╗██║██╔═══██╗████╗ ████║
███████║███████║██████╔╝██║██║   ██║██╔████╔██║
██╔══██║██╔══██║██╔══██╗██║██║   ██║██║╚██╔╝██║
██║  ██║██║  ██║██║  ██║██║╚██████╔╝██║ ╚═╝ ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝     ╚═╝
`, 'color: #00ffc8; font-weight: bold;');
console.log('%c👋 Hey there! Inspecting the code? Nice.', 'color: #6c63ff; font-size: 14px;');
console.log('%c📫 hariom06065@gmail.com | Let\'s build something cool!', 'color: #7a8ba0; font-size: 12px;');

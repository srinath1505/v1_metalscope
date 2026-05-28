/* ============================================================
   METALSCOPE INDIA — MAIN JS
   Handles: Nav, Animations, Counter, Flip Cards, Filter, Modal
   ============================================================ */

/* ── NAV ─────────────────────────────────────────────────── */
(function initNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  const hamburger = document.getElementById('navHamburger');
  const overlay = document.getElementById('navMobileOverlay');
  const closeBtn = document.getElementById('navMobileClose');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    const closeOverlay = () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };
    if (closeBtn) closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeOverlay();
    });
  }

  // Mobile accordion
  document.querySelectorAll('.mobile-nav-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const sub = toggle.nextElementSibling;
      if (sub) sub.classList.toggle('open');
      const caret = toggle.querySelector('.mobile-caret');
      if (caret) caret.style.transform = sub.classList.contains('open') ? 'rotate(180deg)' : '';
    });
  });

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === path || (path === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });
})();

/* ── CLIENT LOGO FALLBACK ────────────────────────────────── */
window.tryFallbackLogo = function(img) {
  if (!img.dataset.fallback) {
    img.dataset.fallback = '1';
    var m = img.src.match(/[?&]domain=([^&]+)/);
    if (m) {
      img.src = 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.' + m[1] + '&size=256';
    } else {
      img.closest('.client-logo-card').classList.add('name-only');
      img.style.display = 'none';
    }
  } else {
    img.closest('.client-logo-card').classList.add('name-only');
    img.style.display = 'none';
  }
};

/* ── SCROLL REVEAL ───────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ── COUNTERS ─────────────────────────────────────────────── */
(function initCounters() {
  const items = document.querySelectorAll('.stat-card');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      const numEl = e.target.querySelector('.stat-number');
      if (!numEl) return;
      const target = parseInt(numEl.dataset.target, 10);
      const suffix = numEl.dataset.suffix || '';
      const duration = 2000;
      const start = performance.now();
      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        numEl.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
      io.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  items.forEach(item => io.observe(item));
})();

/* ── FLIP CARDS ───────────────────────────────────────────── */
(function initFlipCards() {
  const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  document.querySelectorAll('.flip-card').forEach(card => {
    if (isTouchDevice()) {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-know-more')) return;
        card.classList.toggle('flipped');
      });
    }
  });
})();

/* ── FILTER (PROJECTS PAGE) ───────────────────────────────── */
(function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.category === cat;
        card.style.display = match ? '' : 'none';
        if (match) {
          card.style.animation = 'none';
          requestAnimationFrame(() => { card.style.animation = ''; });
        }
      });
    });
  });
})();

/* ── VIDEO MODAL ──────────────────────────────────────────── */
(function initVideoModal() {
  const modal = document.getElementById('videoModal');
  if (!modal) return;
  const closeBtn = modal.querySelector('.video-modal-close');
  const placeholder = modal.querySelector('.video-modal-placeholder');

  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
})();

/* ── MARQUEE DUPLICATE ────────────────────────────────────── */
(function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
})();

/* ── FORM SUBMISSION (placeholder) ───────────────────────── */
(function initForms() {
  document.querySelectorAll('.lead-form, .contact-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = 'Enquiry Sent ✓';
          btn.style.background = '#1C3872';
          setTimeout(() => {
            btn.textContent = orig;
            btn.disabled = false;
            btn.style.background = '';
            form.reset();
          }, 3000);
        }, 1500);
      }
    });
  });
})();

/* ── SMOOTH HASH SCROLL ───────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── WOW STEP REVEAL ──────────────────────────────────────── */
(function initWowSteps() {
  const steps = document.querySelectorAll('.wow-step');
  if (!steps.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const idx = parseInt(e.target.dataset.index || 0);
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, idx * 120);
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });
  steps.forEach((step, i) => {
    step.dataset.index = i;
    step.style.opacity = '0';
    step.style.transform = 'translateY(20px)';
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    io.observe(step);
  });
})();

// ===== MENU MOBILE =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu   = document.querySelector('nav ul');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }

  const path = window.location.pathname;
  const current = path.split('/').pop() || 'index.html';

  document.querySelectorAll('nav ul a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const fileName = href.split('/').pop();
    if (fileName === current) a.classList.add('active');
  });
});

// ===== LAZY LOAD DOS IFRAMES =====
document.addEventListener('DOMContentLoaded', () => {
  const frames = document.querySelectorAll('iframe[data-src]');
  if (!frames.length) return;

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const f = entry.target;
          f.src = f.dataset.src;
          io.unobserve(f);
        }
      });
    }, { rootMargin: '200px' });

    frames.forEach(f => io.observe(f));
  } else {
    frames.forEach(f => f.src = f.dataset.src);
  }
});
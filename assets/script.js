(() => {
  'use strict';
  const header = document.getElementById('site-header');
  const nav = document.getElementById('mobile-nav');
  const menuButton = document.querySelector('.menu-toggle');
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 45);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  function setMenu(open, restoreFocus = false) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
    nav.inert = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) nav.querySelector('a')?.focus();
    else if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true', true));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, false); });
  window.addEventListener('resize', () => { if (innerWidth > 880 && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, false); });

  const filters = [...document.querySelectorAll('.filter-button')];
  const cards = [...document.querySelectorAll('.route-card')];
  filters.forEach(button => button.addEventListener('click', () => {
    const active = button.dataset.filter;
    filters.forEach(el => { const selected = el === button; el.classList.toggle('active', selected); el.setAttribute('aria-pressed', String(selected)); });
    cards.forEach(card => { card.hidden = active !== 'all' && card.dataset.category !== active; });
    const visible = cards.filter(el => !el.hidden).length;
    document.getElementById('route-empty').hidden = visible > 0;
    document.getElementById('route-grid').classList.toggle('is-filtered', active !== 'all');
  }));
  document.getElementById('copyright-year').textContent = new Date().getFullYear();
})();

// =========================================
// FUNMIBITECH BRAND SITE — JAVASCRIPT
// =========================================


// TEMPLATE "READ MORE" TOGGLE
// Expands/collapses the extra details on each template card

function toggleMore(btn, id) {
  const panel = document.getElementById(id);
  const isOpen = panel.classList.contains('open');

  panel.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
  btn.childNodes[0].textContent = isOpen ? 'Read more ' : 'Show less ';
}


// MOBILE NAV MENU
// Opens/closes the dropdown menu and overlay on mobile

const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navOverlay = document.getElementById('navOverlay');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');

  mobileMenu.classList.toggle('open', !isOpen);
  hamburger.classList.toggle('open', !isOpen);
  navOverlay.classList.toggle('open', !isOpen);

  // Lock page scroll while menu is open
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

// Clicking the overlay also closes the menu
navOverlay.addEventListener('click', closeMenu);

function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

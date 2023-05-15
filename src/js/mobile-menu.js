const moblieMenuToggle = document.querySelector('#mobile-menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const mobileNavLink = document.querySelectorAll('.header__nav__mobile__link');

const handleOpenMobileNav = () => {
  mobileNav.setAttribute('data-visible', true);
  moblieMenuToggle.setAttribute('aria-expanded', true);
  moblieMenuToggle.setAttribute('src', 'assets/icons/close-menu.svg');
  moblieMenuToggle.setAttribute('alt', 'Close mobile navigation icon');
  document.body.style.overflow = 'hidden';
};

const handleCloseMobileNav = () => {
  mobileNav.setAttribute('data-visible', false);
  moblieMenuToggle.setAttribute('aria-expanded', false);
  moblieMenuToggle.setAttribute('src', 'assets/icons/hamburger.svg');
  moblieMenuToggle.setAttribute('alt', 'Open mobile navigation icon');
  document.body.style.overflow = 'auto';
};

// Open mobile nav
moblieMenuToggle.addEventListener('click', () => {
  const visiblity = mobileNav.getAttribute('data-visible');
  visiblity === 'false' ? handleOpenMobileNav() : handleCloseMobileNav();
});

// Handle clicking a mobile menu link
mobileNavLink.forEach((link) => {
  link.addEventListener('click', handleCloseMobileNav);
});

// Hide mobile navbar and blurred div
// for desktop on window resize
window.onresize = () => {
  if (window.innerWidth >= 768) {
    handleCloseMobileNav();
  }
};

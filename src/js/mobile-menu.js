const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const mobileNav = document.querySelector('#mobile-nav');
const mobileNavLink = document.querySelectorAll('.mobile-nav-link');

// Open mobile nav
openMenu.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

const handleCloseMobileNav = () => {
  mobileNav.style.display = 'none';
  document.body.style.overflow = 'auto';
};

// Handle clicking the close mobile menu icon
closeMenu.addEventListener('click', handleCloseMobileNav);

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

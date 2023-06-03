const contactForm = document.querySelector('#contact-me__form');
const emailInput = document.querySelector('#email');
const emailErrorDiv = document.querySelector('#email-validation-error');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    emailErrorDiv.style.display = 'flex';
  } else {
    emailErrorDiv.style.display = 'none';
    contactForm.submit();
  }
});

// script.js
function openModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

function submitForm() {
  const form = document.getElementById('registerForm');
  
  alert('Thank you for registering, ' + form.querySelector('input[type="text"]').value + '!');
  closeModal();
  form.reset();
}

function submitContactForm() {
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  alert(`Thanks for reaching out, ${name}! We'll get back to you at ${email}.`);
  document.getElementById('contactForm').reset();
}


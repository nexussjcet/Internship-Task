// Form submission interaction
const form = document.getElementById('registerForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();

  if (name && email) {
    message.classList.remove('hidden');
    form.reset();
    setTimeout(() => {
      message.classList.add('hidden');
    }, 4000);
  }
});
window.addEventListener('load', () => {
  const title = document.getElementById('animated-title');
  title.style.animation = 'none';  // reset animation
  title.offsetHeight;              // trigger reflow
  title.style.animation = 'fadeScaleGlow 3s ease forwards';  // reapply
});  

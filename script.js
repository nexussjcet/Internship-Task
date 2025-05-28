window.addEventListener('DOMContentLoaded', function() { 
  const button = document.querySelector('.hero button');
  button.classList.add('popped');

  // Optional: Remove the pop effect after some seconds
  setTimeout(function ()  {
    button.classList.remove('popped');
  }, 1500); // removes after 1.5 seconds
});

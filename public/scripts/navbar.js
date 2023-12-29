document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.navbar__menu');
  const toggler = document.querySelector('.navbar__mobile-toggler');

  toggler.addEventListener('click', () => {
    menu.classList.toggle('navbar__menu--active');
  });
});

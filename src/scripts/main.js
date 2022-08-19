'use strict';

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(elem => {
    elem.value = '';
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

document.addEventListener('DOMContentLoaded', () => {
  lazySizes.init();
});

const button = document.getElementById('buttonPortada');

button.addEventListener('click', () => {
  window.location.href = 'sitios.html';
});

document.addEventListener('touchstart', onTouchStart, {passive: true});


observer.observe({entryTypes: ['longtask']});
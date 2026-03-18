import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

lazySizes.init();

const button = document.getElementById('buttonPortada');
if (button) {
  button.addEventListener('click', () => {
    window.location.href = 'sitios.html';
  });
}

const onTouchStart = () => {};
document.addEventListener('touchstart', onTouchStart, {passive: true});

// observer.observe({entryTypes: ['longtask']});
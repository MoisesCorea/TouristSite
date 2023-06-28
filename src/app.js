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

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Attribution entry including "containerSrc":"https://example.com"
    console.log(JSON.stringify(entry.attribution));
  }
});

observer.observe({entryTypes: ['longtask']});
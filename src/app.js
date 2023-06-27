import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('buttonPortada')
  button.addEventListener('click', () => {
    window.location.href = 'sitios.html'
  })

  lazySizes.init();
})



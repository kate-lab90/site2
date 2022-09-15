document.querySelector('.menu-burger').addEventListener('cklick', function (e) {
  e.preventDefault();
  document.querySelector('nav').innerHTML.toggle('is-active');
});
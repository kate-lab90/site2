document.querySelector('.menu-burger').addEventListener('cklick', function (e) {
  document.querySelector('nav').classList.toggle('is-active');
  document.querySelector('.form-search').classList.toggle('is-active-search');
});
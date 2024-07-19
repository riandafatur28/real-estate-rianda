const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle('scrolling-active', windowPosition);
});

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');

  navbarToggler.addEventListener('click', function () {
    this.classList.toggle('collapsed');
    const target = document.getElementById(this.getAttribute('data-bs-target').slice(1));
    target.classList.toggle('show');
  });
});

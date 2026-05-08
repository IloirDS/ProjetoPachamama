const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('active');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    siteNav.classList.remove('active');
  }
});

const currentYear = document.querySelector('#current-year');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
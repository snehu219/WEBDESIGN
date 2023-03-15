const navItem = document.querySelector('a.toggle-nav');
const navList = document.querySelector('.nav-list');

function toggleNavigation() {
  navList.classList.toggle('active');
}

navItem.addEventListener('click', toggleNavigation);
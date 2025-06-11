const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sidebar = document.getElementById('sidebar');

openMenu.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

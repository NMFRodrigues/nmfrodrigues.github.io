const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('openSidebarBtn');
const closeBtn = document.getElementById('closeSidebarBtn');

openBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
  openBtn.style.display = 'none';
  closeBtn.style.display = 'inline';
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  openBtn.style.display = 'inline';
  closeBtn.style.display = 'none';
});

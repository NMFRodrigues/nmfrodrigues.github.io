document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('#sidebar a');
  const contentDiv = document.querySelector('.content');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const bg = link.getAttribute('data-bg');
      if (bg) {
        document.body.style.backgroundImage = bg;
        document.body.style.backgroundColor = '';
      } else {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = 'white';
      }

      const title = link.getAttribute('data-title') || '';
      const text = link.getAttribute('data-text') || '';
      contentDiv.innerHTML = `<h1>${title}</h1><p>${text}</p>`;

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

// Initialize first link as active on page load
if (links.length > 0) {
  links[0].click();
}


const links = document.querySelectorAll('#sidebar a');
const contentDiv = document.querySelector('.content');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Get background image if available, else set to white
    const bg = link.getAttribute('data-bg');
    if (bg) {
      document.body.style.backgroundImage = bg;
      document.body.style.backgroundColor = ''; // clear background color
    } else {
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundColor = 'white'; // plain white background
    }

    // Update content
    const title = link.getAttribute('data-title');
    const text = link.getAttribute('data-text');
    contentDiv.innerHTML = `
      <h1>${title}</h1>
      <p>${text}</p>
    `;

    // Active link styling
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


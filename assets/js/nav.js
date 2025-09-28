function setActive(){
  // figure out current page (default to index.html if just a folder path)
  let here = location.pathname.split('/').pop() || 'index.html';
  here = here.toLowerCase();

  // normalize hrefs: strip folders, keep only the filename
  const normalize = (p) => {
    if (!p) return '';
    return p.split('/').pop().toLowerCase() || 'index.html';
  };

  // add 'active' class to the link that matches the current file
  document.querySelectorAll('.nav a').forEach(a => {
    const target = normalize(a.getAttribute('href'));
    if (target === here) {
      a.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActive);

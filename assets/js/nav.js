
function setActive(){
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (path==='' && href==='index.html')) a.classList.add('active');
  });
}
document.addEventListener('DOMContentLoaded', setActive);

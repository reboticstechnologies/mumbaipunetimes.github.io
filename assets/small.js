
// small.js
document.addEventListener('DOMContentLoaded', function(){
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=> navLinks.classList.toggle('open'));
  }
});

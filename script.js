//===menu===//
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let menuIcon = document.querySelector('#menu-icon');

menuBtn.onclick = () => {
  navbar.classList.toggle('active');

  if (navbar.classList.contains('active')) {
    menuIcon.className = 'bx bx-x'; 
  } else {
    menuIcon.className = 'bx bx-menu'; 
  }
};

window.onscroll = () => {
  navbar.classList.remove('active');
};
//=== menu ===//
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

//=== accordeon ===//
document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.getElementsByClassName('accordion');

  for (var i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener('click', function () {
          this.classList.toggle('active');

          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              for (var j = 0; j < accordions.length; j++) {
                  var otherPanel = accordions[j].nextElementSibling;
                  if (otherPanel !== panel) {
                      accordions[j].classList.remove('active');
                      otherPanel.style.maxHeight = null;
                  }
              }
              panel.style.maxHeight = panel.scrollHeight + 'px';
          }
      });
  }
});

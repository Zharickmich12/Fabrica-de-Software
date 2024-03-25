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

//===contador===//
function animateValue(id, start, end, duration) {
  var obj = document.getElementById(id);
  var range = end - start;
  var minTimer = 50;
  var stepTime = Math.abs(Math.floor(duration / range));

  stepTime = Math.max(stepTime, minTimer);

  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function formatValue(value) {
      if (value >= 1000) {
          return (value / 1000).toFixed(0) + 'k';
      } else {
          return value.toFixed(0);
      }
  }

  function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      obj.innerHTML = formatValue(value);
      if (value == end) {
          clearInterval(timer);
      }
  }

  timer = setInterval(run, stepTime);
  run();
}

document.addEventListener("DOMContentLoaded", function() {
  animateValue("contador-1", 0, 50, 2000); 
  animateValue("contador-2", 0, 50, 2000); 
  animateValue("contador-3", 0, 100000, 3000); 
});

//===google translate===//
function googleTranslateElementInit(){
  new google.translate.TranslateElement(
    {pageLanguage: 'es'},
    'google_translate_element'
  );
}

//=== scroll reveal ===//
ScrollReveal({ 
  reset: true,
  distance: '60px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content', '.heading', { origin: 'top' });
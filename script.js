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
  menuIcon.className = 'bx bx-menu';
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
document.addEventListener('DOMContentLoaded', function() {
  reveal(); 
});

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

//=== form ===//
const name = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "testingsoftwareprojects101@gmail.com",
        Password : "BD6F943AF9E992B436D63731F489F69688A1",
        To : 'cacardona5@gmail.com',
        From : "testingsoftwareprojects101@gmail.com",
        Subject : "Nueva respuesta del formulario de contacto",
        Body : "<strong>Nombre:</strong> " + name.value + "<br/>" +
        "<strong>Email:</strong> " + email.value + "<br/>" +
        "<strong>Mensaje:</strong> " + msg.value
    }).then(
        message => {
            alert("¡Gracias por ponerte en contacto con nosotros! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo lo antes posible.");

            name.value = '';
            email.value = '';
            msg.value = '';
        }
    );
});

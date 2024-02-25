/*=== scroll reveal ===*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

/*=== accordion ===*/
var coll = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/*=== contador ===*/
function contarNumeros(elemento, limite) {
    let contador = 0;
    const intervalo = setInterval(() => {
      contador++;
      elemento.textContent = contador;
      if (contador === limite) {
        clearInterval(intervalo);
      }
    }, 10);
  }

  contarNumeros(document.getElementById("contador-1"), 50);
  contarNumeros(document.getElementById("contador-2"), 50);
  contarNumeros(document.getElementById("contador-3"), 100);
window.onload = function() {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
  document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      disabledEvent(e);
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      disabledEvent(e);
    }
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      disabledEvent(e);
    }
    if (e.ctrlKey && e.keyCode == 85) {
      disabledEvent(e);
    }
    if (event.keyCode == 123) {
      disabledEvent(e);
    }
  }, false);
  function disabledEvent(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
  }
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// Início inserção de Menu Superior e Footer

function inserirMenu() {
  fetch("Menu.html")
    .then((response) => response.text())
    .then((menuHtml) => {
      const menuContainer = document.getElementById("menu_container");
      menuContainer.innerHTML = menuHtml;
    });
}

function inserirFooter() {
  fetch("Footer.html") // Atualize para o caminho correto do arquivo Footer.html
    .then((response) => response.text())
    .then((footerHtml) => {
      const footerContainer = document.getElementById("footer_container"); // Defina o ID correto
      footerContainer.innerHTML = footerHtml;
    });
}
document.addEventListener("DOMContentLoaded", inserirFooter);
document.addEventListener("DOMContentLoaded", inserirMenu);
// Fim inserção de Menu Superior e Footer

function limparFormulario() {
  const forms = document.querySelectorAll("form");
  for (let i = 0; i < forms.length; i++) {
    forms[i].reset();
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// Sélection des éléments du DOM
var carousel = document.querySelector(".carousel");
var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var currdeg = 0;

// Ajout des écouteurs d'événements aux boutons Next et Prev
nextButton.addEventListener("click", function(e) {
  rotate({ data: { d: "n" } });
});

prevButton.addEventListener("click", function(e) {
  rotate({ data: { d: "p" } });
});

// Fonction pour faire tourner le carousel
function rotate(e) {
  if (e.data.d == "n") {
    currdeg = currdeg - 60;
  }
  if (e.data.d == "p") {
    currdeg = currdeg + 60;
  }
  
  // Application de la transformation CSS au carousel
  carousel.style.webkitTransform = "rotateY(" + currdeg + "deg)";
  carousel.style.mozTransform = "rotateY(" + currdeg + "deg)";
  carousel.style.oTransform = "rotateY(" + currdeg + "deg)";
  carousel.style.transform = "rotateY(" + currdeg + "deg)";
}

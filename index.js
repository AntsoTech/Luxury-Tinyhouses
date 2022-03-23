// Selected the two navigation bars
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");

document.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    nav1.style.display = "none";
    nav2.style.display = "flex";
    nav2.style.position = "fixed";
    nav2.style.top = "0";
  } else {
    nav1.style.display = "flex";
    nav2.style.display = "none";
  }
});

// Script pour la transfo du hamburger button les amis
function myFunction(element) {
  element.classList.toggle("changeBurger");
};


// création des fonctions "toggle" qui permet de faire apparaitre le paragraphe de la "card"
function appear1() {
document.querySelector(".projects__section__card1__text--hidden").classList.toggle("projects__section__card1__text--visible");
} ;

function appear2() {
  document.querySelector(".projects__section__card2__text--hidden").classList.toggle("projects__section__card2__text--visible");

} ;

function appear3() {
  document.querySelector(".projects__section__card3__text--hidden").classList.toggle("projects__section__card3__text--visible");
} ;
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

// Projects section - buttons 
// const card1 = document.getElementById("card1");
// const card2 = document.getElementById("card2");
// const card3 = document.getElementById("card3");

// création d'une fonction "toggle" qui permet de faire apparaitre le paragraphe de la "card"
function appear2() {
  const cardText3 = document.getElementById("projects1");
  cardText3.classList.toggle("projects__section__card1__text-open");
} ;

function appear2() {
  const cardText3 = document.getElementById("projects2");
  cardText3.classList.toggle("projects__section__card2__text-open");
} ;

function appear3() {
  const cardText3 = document.getElementById("projects3");
  cardText3.classList.toggle("projects__section__card3__text-open");
} ;
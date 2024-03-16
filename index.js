let jimmyEatAllThePizza = document.getElementById("jimmy");
jimmyEatAllThePizza.style.backgroundImage =
  "linear-gradient(to bottom, #000000dd, transparent)";
jimmyEatAllThePizza.style.backgroundColor = "transparent";
jimmyEatAllThePizza.style.backdropFilter = "none";
jimmyEatAllThePizza.style.filter = "none";

window.onscroll = () => {
  if (window.scrollY > 0) {
    jimmyEatAllThePizza.style.backgroundColor = "rgba(59, 59, 59, 0.3)";
    jimmyEatAllThePizza.style.backdropFilter = "blur(16px)";
    jimmyEatAllThePizza.style.filter = "saturate(120%) brightness(69%)";
    jimmyEatAllThePizza.style.backgroundImage = "none";
  } else {
    jimmyEatAllThePizza.style.backgroundImage =
      "linear-gradient(to bottom, #000000dd, transparent)";
    jimmyEatAllThePizza.style.backgroundColor = "transparent";
    jimmyEatAllThePizza.style.backdropFilter = "none";
    jimmyEatAllThePizza.style.filter = "none";
  }
  console.log(window.scrollY);
};

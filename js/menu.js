const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener("click", function() {
  let style = window.getComputedStyle(menu);
  if (style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

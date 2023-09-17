const menuButton = document.querySelector('.header_navigation_menu_link_menu');
const menu = document.querySelector('.header__list');
console.log(menuButton)
console.log(menu)
function toggle(){
  menu.classList.toggle("header__list-isActive");
}

menuButton.addEventListener("click", toggle);
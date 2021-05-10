const toggleMenu = () => {
  const btnMenu = document.querySelector(".menu"),
    menu = document.querySelector("menu"),
    menuItems = menu.querySelectorAll("*");

  const handlerMenu = () => {
    menu.classList.toggle("active-menu");
  };
  btnMenu.addEventListener("click", handlerMenu);

  menuItems.forEach((elem) =>
    elem.addEventListener("click", (event) => {
      let target = event.target;
      console.log(target);
      if (target.classList.contains("close-btn")) {
        handlerMenu();
      } else {
        handlerMenu();
      }
    })
  );
};
export default toggleMenu;

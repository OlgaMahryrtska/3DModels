const changePhoto = () => {
  let attr;
  let images = document.querySelectorAll(".command__photo");
  images.forEach((elem) => {
    elem.addEventListener("mouseenter", (event) => {
      attr = elem.getAttribute("src");

      event.target.src = event.target.dataset.img;
    });
    elem.addEventListener("mouseleave", (event) => {
      event.target.src = attr;
    });
  });
};
export default changePhoto;

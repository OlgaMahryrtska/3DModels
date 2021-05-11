const animate = () => {
  const popup = document.querySelector(".popup");
  let pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      popup.style.top = pos + "px";
      popup.style.left = pos + "px";
    }
  }
};

export default animate;

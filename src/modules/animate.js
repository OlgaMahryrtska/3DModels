let timePassed;

const timer = setTimeout(function () {
  let start = Date.now();

  timePassed = Date.now() - start;
  if (timePassed >= 6000) {
    clearInterval(timer);
    return;
  }
  if (window.screen.width < 768) {
    clearTimeout(timer);
    return false;
  }
  animate(timePassed);
}, 3000);
const animate = () => {
  timePassed++;
  const popup = document.querySelector(".popup");
  popup.style.display = "block";
};

export default animate;

const checkCalcNums = () => {
  let calcSquare = document.querySelector(".calc-square"),
    calcCount = document.querySelector(".calc-count"),
    calcDay = document.querySelector(".calc-day");
  calcSquare.setAttribute("type", "number");
  calcCount.setAttribute("type", "number");
  calcDay.setAttribute("type", "number");
};
export default checkCalcNums;

function countTimer(deadline) {
  const timerHours = document.querySelector("#timer-hours"),
    timerMinutes = document.querySelector("#timer-minutes"),
    timerSeconds = document.querySelector("#timer-seconds");
   let  timerInterval;

  function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds =timeRemaining>0? Math.floor(timeRemaining % 60) : 0,
      minutes =timeRemaining >0 ? Math.floor((timeRemaining / 60) % 60) : 0,
      hours = timeRemaining > 0 ? Math.floor(timeRemaining / 60 / 60) : 0;
     

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    

    return { timeRemaining, hours, minutes, seconds };
  }
  
   function updateClock() {
   const timer = getTimeRemaining();
   timerHours.textContent = (timer.hours);
    timerMinutes.textContent = (timer.minutes);
    timerSeconds.textContent = (timer.seconds);
     if (timer.timeRemaining < 0) {
      clearInterval(timerInterval);   
  }
}
  updateClock();
timerInterval = setInterval(updateClock, 1000);


}
export default countTimer;

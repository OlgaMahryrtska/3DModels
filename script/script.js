window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  let start = Date.now();
  let timePassed;
  function countTimer(deadline) {
    const timerHours = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return { timeRemaining, hours, minutes, seconds };
    }
    function updateClock() {
      const timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      if (timer.timeRemaining > 0) {
        setInterval(updateClock, 1000);
      } else {
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
      }
    }
    updateClock();
  }
  countTimer("27 april 2021");
  // menu
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
  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector(".popup"),
      popupBtn = document.querySelectorAll(".popup-btn");

    popupBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        popup.style.display = "block";
      });
    });

    popup.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("popup-close")) {
        popup.style.display = "none";
      } else {
        target = target.closest(".popup-content");
        if (!target) {
          popup.style.display = "none";
        }
      }
    });
  };
  togglePopUp();
  // popup animation
  const timer = setInterval(function () {
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

  //tabs

  const tabs = () => {
    const tabHeader = document.querySelector(".service-header"),
      tab = tabHeader.querySelectorAll(".service-header-tab"),
      tabContent = document.querySelectorAll(".service-tab");
    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tab[i].classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      }
    };
    tabHeader.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".service-header-tab");
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();
});

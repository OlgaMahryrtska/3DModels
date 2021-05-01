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

  //slider
  const slider = () => {
    const slide = document.querySelectorAll(".portfolio-item"),
      btn = document.querySelectorAll(".portfolio-btn"),
      slider = document.querySelector(".portfolio-content"),
      dots = document.querySelector(".portfolio-dots");

    const addDots = () => {
      for (let i = 0; i < slide.length; i++) {
        let li = document.createElement("li");
        li.classList.add("dot");
        dots.appendChild(li);
      }
    };
    addDots();
    let dot = document.querySelectorAll(".dot");
    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;
      if (!target.matches(".portfolio-btn, .dot")) {
        return;
      }
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");
      if (target.matches("#arrow-right")) {
        currentSlide++;
      } else if (target.matches("#arrow-left")) {
        currentSlide--;
      } else if (target.matches(".dot")) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    });
    slider.addEventListener("mouseover", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        stopSlide();
      }
    });
    slider.addEventListener("mouseout", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        startSlide();
      }
    });
    startSlide(1500);
  };
  slider();

  // calculator
  const checkCalcNums = () => {
    let calcSquare = document.querySelector(".calc-square"),
      calcCount = document.querySelector(".calc-count"),
      calcDay = document.querySelector(".calc-day");
    calcSquare.setAttribute("type", "number");
    calcCount.setAttribute("type", "number");
    calcDay.setAttribute("type", "number");
    console.log(calcSquare.hasAttribute("type"));
  };
  checkCalcNums();
  //comand picture
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
  changePhoto();

  // to check inputs in field 'Connect'
  const forbideLatine = () => {
    let formName = document.getElementById("form2-name"),
      formMessage = document.getElementById("form2-message"),
      formMail = document.getElementById("form2-email"),
      formPhone = document.getElementById("form2-phone");

    formName.addEventListener("input", () => {
      formName.value = formName.value.replace(/[a-z]/gi, "");
    });
    formName.addEventListener("blur", () => {
      let input = formName.value;
      input = input.trim();
      formName.value = input[0].toUpperCase() + input.slice(1);
    });
    formMessage.addEventListener("input", () => {
      formMessage.value = formMessage.value.replace(/[a-z]/gi, "");
    });
    formMail.addEventListener("input", () => {
      formMail.value = formMail.value.replace(/[а-я]/gi, "");
    });
    formPhone.addEventListener("input", () => {
      formPhone.value = formPhone.value.replace(/[^0-9\-()]/g, "");
    });
  };

  forbideLatine();
});

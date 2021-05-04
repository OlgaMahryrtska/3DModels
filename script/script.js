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
  //calculator
  const calculator = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block"),
      calcType = document.querySelector(".calc-type"),
      calcSquare = document.querySelector(".calc-square"),
      calcDay = document.querySelector(".calc-day"),
      calcCount = document.querySelector(".calc-count"),
      totalValue = document.getElementById("total");

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;
      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }
      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }
      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }
      totalValue.textContent = total;
    };
    calcBlock.addEventListener("change", (event) => {
      const target = event.target;
      if (target.matches("select") || target.matches("input")) {
        countSum();
      }
    });
  };
  calculator(100);

  //send-ajax-form
  const sendForm = () => {
    const errorMessage = "Что-то пошло не так...",
      loadMessage = " Загрузка...",
      successMessage = " Спасибо! Мы скоро с вами свяжемся!";
    const forms = document.getElementsByTagName("form");
    const statusMessage = document.createElement("div");
    statusMessage.textContent = "Here will be the message";
    statusMessage.style.cssText = "font-size:2rem; color:white";

    for (let item of forms) {
      item.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();
          item.appendChild(statusMessage);
          statusMessage.textContent = loadMessage;
          const formData = new FormData(item);
          let body = {};
          for (let val of formData.entries()) {
            body[val[0]] = val[1];
          }
          postData(body, () => {
            statusMessage.textContent = successMessage;
          });
        },
        (error) => {
          statusMessage.textContent = errorMessage;
          console.log(error);
        }
      );
    }

    const postData = (body, outputData, errorData) => {
      const request = new XMLHttpRequest();
      request.addEventListener("readystatechange", () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          outputData();
        } else {
          errorData(request.status);
        }
      });
      request.open("POST", "./server.php");
      request.setRequestHeader("Content-Type", "application/json");

      request.send(JSON.stringify(body));
    };
  };
  sendForm();
});

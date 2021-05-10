const sendForm = () => {
  const errorMessage = "Что-то пошло не так...",
    loadMessage = " Загрузка...",
    successMessage = " Спасибо! Мы скоро с вами свяжемся!";
  const forms = document.getElementsByTagName("form");
  const statusMessage = document.createElement("div");
  statusMessage.textContent = "";
  statusMessage.style.cssText = "font-size:2rem; color:white";

  for (let item of forms) {
    item.addEventListener("submit", (event) => {
      event.preventDefault();
      item.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(item);
      let body = {};
      for (let val of formData.entries()) {
        body[val[0]] = val[1];
      }
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("status network not 200");
          }

          statusMessage.textContent = successMessage;
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
    });
  }
  const postData = (body) => {
    return fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
};
export default sendForm;

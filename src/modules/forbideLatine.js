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
export default forbideLatine;

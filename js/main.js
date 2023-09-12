const form = document.querySelector(".form-feedback")
const formButton = document.querySelector(".form-feedback-button")

const inputName = document.querySelector("#inputName")
const inputTel = document.querySelector("#inputTel")
formButton.addEventListener("click", (e) => {
  e.preventDefault()
  if (inputTel.value.length <= 6) {
    alert("Номер телефона должен содержать минимум 6 цифр!")
    return;
  }
  alert("Заказ отправлен!")
  console.log(inputName.value)
  console.log(inputTel.value)
  inputName.value = "";
  inputTel.value = "";

})
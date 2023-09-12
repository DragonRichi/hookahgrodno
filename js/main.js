const form = document.querySelector(".form-feedback")
const formButton = document.querySelector(".form-feedback-button")


const inputName = document.querySelector("#inputName")
const inputTel = document.querySelector("#inputTel")

const burger = document.querySelector(".menu__list.active");
const burgerID = document.querySelector("#hamb");
const hamb = document.querySelector("#hamb");
const menu = document.querySelector("#menu__list");
const body = document.body;

hamb.addEventListener("click", hambHandler);
Burger();

function hambHandler(e) {
  e.preventDefault();
  menu.classList.toggle("active");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}
function Burger() {
  document.addEventListener("click", (e) => {
    const click9 = e.composedPath().includes(burgerID);
    const click10 = e.composedPath().includes(burger);
    if (!click9 && !click10) {
      menu.classList.remove("active");
      hamb.classList.remove("active");
      body.classList.remove("noscroll");
    }
  });
}

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
const per = document.querySelector(".form");

function clickPurp() {
  let purp_button = document.querySelector(".purpose-wrapper__button");
  if (purp_button) {
    purp_button.addEventListener("click", (e) => {
      document.querySelector(".form").classList.add("active");

      const form = document.querySelector(".form-wrapper");
      document.addEventListener("click", (e) => {
        closeForm();
        const click = e.composedPath().includes(form);
        const click2 = e.composedPath().includes(per);
        if (!click && click2) {
          document.querySelector(".form").classList.remove("active");
        }
      });
    });
  } else {
    console.log("no button");
  }
}

clickPurp();

function closeForm() {
  document
    .querySelector(".form-header__close")
    .addEventListener("click", (e) => {
      document.querySelector(".form").classList.remove("active");
    });
}
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

$(document).ready(function () {
  $('#form').submit(function (e) { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    e.preventDefault()
    if (document.form.name.value == '' || document.form.phone.value == '') {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function () {
      $('.js-overlay-thank-you').fadeIn();
      $(this).find('input').val('');
      $('#forma').trigger('reset');
    });
    return false;
  });
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function () { // по клику на крестик
  $('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
  var popup = $('.popups');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.js-overlay-thank-you').fadeOut();
  }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function ($) {
  $('[name="phone"]').mask("+7(999) 999-9999");
});

// const form = document.getElementById("form");
// form.addEventListener("submit", formSend);

// async function formSend(e) {
//   e.preventDefault();
//   let formData = new FormData(form);
//   let response = await fetch("sendmail.php", {
//     method: "POST",
//     body: formData,
//   });
//   if (response.ok) {
//     let result = await response.json();
//     alert(result.message);
//     form.reset();
//   } else {
//     alert("Ошибка");
//   }
// }

// document.querySelector(".home").addEventListener("click", () => {
//   document.querySelector("#home").classList.toggle("show");
//   ShowHome();
// });
// document.querySelector(".cmp").addEventListener("click", () => {
//   document.querySelector("#cmp").classList.toggle("show");
//   ShowCmp();
// });
// document.querySelector(".zav").addEventListener("click", () => {
//   document.querySelector("#zav").classList.toggle("show");
//   ZavCmp();
// });

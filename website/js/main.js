// Мобильное меню: открытие/закрытие
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav__toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
    // Закрываем меню при клике по ссылке (на мобильных)
    nav.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
      });
    });
  }

  // Год в подвале
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Простая обработка формы контактов (без бэкенда)
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent =
          "Спасибо! Форма-заглушка. Чтобы письма реально отправлялись, подключите почту Infomaniak (см. README).";
        status.style.color = "#1f7a3d";
      }
      form.reset();
    });
  }
});

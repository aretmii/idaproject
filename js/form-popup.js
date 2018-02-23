'use strict';

// -----------ПЕРЕМЕННЫЕ---------------------------------------------------------
var menuButton = document.querySelector('.aside-nav-list__link--inactive');
var popupForm = document.querySelector('.form-popup');

// -----------ФУНКЦИИ--------------------------------------------------------------
// функция открытия/закрытия формы при клике на пункт меню
// путем удаления/добавления класса hidden
var openForm = function () {
  popupForm.classList.toggle('hidden');
  menuButton.classList.toggle('aside-nav-list__link--active');
};
// функция добавления/удаления стилей кнопки меню
var buttonActive = function () {
  menuButton.style.color = "#808592";
  menuButton.style.backgroundColor = "#2a2d37";
};
// -----------ОБРАБОТЧИКИ-----------------------------------------------------
// при клике на пункт меню вызывается функция openForm
menuButton.addEventListener('click', function () {
  openForm();
  // if (popupForm.classList != "hidden") {
  //   menuButton.style.color = "#808592";
  //   menuButton.style.backgroundColor = "#2a2d37";
  // }
});

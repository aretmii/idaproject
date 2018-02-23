'use strict';
// ВАЛИДАЦИЯ
// переменные
var cardNumberFirst = document.querySelector('.first-group');
var cardNumberSecond = document.querySelector('.second-group');
var cardNumberThird = document.querySelector('.third-group');
var cardNumberFourth = document.querySelector('.fourth-group');
var cardMonth = document.querySelector('.card__time--month');
var cardYear = document.querySelector('.card__time--year');
var cardOwnerInp = document.querySelector('.card__owner--inp');
var cardCode = document.querySelector('.card__backside-code--inp');
var buttonPay = document.querySelector('.form-card__button');
// функции валидации номера карты
// для упрощения просто создал 4 функции и в верстке добавил 4 класса
var numberValidateFirst = function () {
  var letters = /^[a-zA-Z]+$/;
  if (cardNumberFirst.value.length !== 4) {
    cardNumberFirst.setCustomValidity('В одном поле 4 цифры');
    cardNumberFirst.style.border = "1px solid red";
  } else if (cardNumberFirst.value.search(letters) == 0) {
    cardNumberFirst.setCustomValidity('цифры');
    cardNumberFirst.style.border = "1px solid red";
  } else {
    cardNumberFirst.setCustomValidity('');
    cardNumberFirst.style.border = "none";
    buttonPay.removeEventListener('click', function () {
      numberValidateFirst();
    });
  }
};

var numberValidateSecond = function () {
  var letters = /^[a-zA-Z]+$/;
  if (cardNumberSecond.value.length !== 4) {
    cardNumberSecond.setCustomValidity('В одном поле 4 цифры');
    cardNumberSecond.style.border = "1px solid red";
  } else if (cardNumberSecond.value.search(letters) == 0) {
    cardNumberSecond.setCustomValidity('цифры');
    cardNumberSecond.style.border = "1px solid red";
  } else {
    cardNumberSecond.setCustomValidity('');
    cardNumberSecond.style.border = "none";
    buttonPay.removeEventListener('click', function () {
      numberValidateSecond();
    });
  }
};

var numberValidateThird = function () {
  var letters = /^[a-zA-Z]+$/;
  if (cardNumberThird.value.length !== 4) {
    cardNumberThird.setCustomValidity('В одном поле 4 цифры');
    cardNumberThird.style.border = "1px solid red";
  } else if (cardNumberThird.value.search(letters) == 0) {
    cardNumberThird.setCustomValidity('цифры');
    cardNumberThird.style.border = "1px solid red";
  } else {
    cardNumberThird.setCustomValidity('');
    cardNumberThird.style.border = "none";
    buttonPay.removeEventListener('click', function () {
      numberValidateThird();
    });
  }
};

var numberValidateFourth = function () {
  var letters = /^[a-zA-Z]+$/;
  if (cardNumberFourth.value.length !== 4) {
    cardNumberFourth.setCustomValidity('В одном поле 4 цифры');
    cardNumberFourth.style.border = "1px solid red";
  } else if (cardNumberFourth.value.search(letters) == 0) {
    cardNumberFourth.setCustomValidity('цифры');
    cardNumberFourth.style.border = "1px solid red";
  } else {
    cardNumberFourth.setCustomValidity('');
    cardNumberFourth.style.border = "none";
    buttonPay.removeEventListener('click', function () {
      numberValidateFourth();
    });
  }
};
// функция валидации имени владельца
var ownerValidate = function () {
  var letters1 = /^[а-яА-ЯёЁ0-9]+$/ ;
  if (cardOwnerInp.value.search(letters1) == 0) {
    cardOwnerInp.setCustomValidity('Только латинские буквы');
    cardOwnerInp.style.border = "1px solid red";
  } else {
    cardOwnerInp.setCustomValidity('');
    cardOwnerInp.style.border = "none";
    buttonPay.removeEventListener('click', function () {
      ownerValidate();
    });
  }
};
// функция валидации CVV-кода
var codeValidate = function (val) {
  var letters = /^[a-zA-Z]+$/;
  if (cardCode.value.length !== 3) {
    cardCode.setCustomValidity('3 цифры');
    cardCode.style.border = "1px solid red";
  } else if (cardCode.value.search(letters) == 0) {
    cardCode.setCustomValidity('Цифры');
    cardCode.style.border = "1px solid red";
  } else {
    cardCode.setCustomValidity('');
    cardCode.style.border = "none";
    buttonPay.removeEventListener('click', function () {
      ownerValidate();
    });
  }
};
// обработчик клика на кнопку оплатить
buttonPay.addEventListener('click', function () {
  ownerValidate();
  codeValidate();
  numberValidateFirst();
  numberValidateSecond();
  numberValidateThird();
  numberValidateFourth();
});

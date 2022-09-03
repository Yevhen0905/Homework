"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// MIN
// 2 придумай до 4-х імен змінних, що потрібні тобі для даної задачі
var userName = 'Evgen';
var lastName = 'Vittsenko';
var userAge = 39;
var phoneNumber = '06709889765';
var COLOR_WNITE_favorite = '#fff';
var userAdress = {
  street: 'Tovaryska',
  house: 15
};
var result = "".concat(userName, ", ").concat(lastName, ", ").concat(userAge, ", ").concat(phoneNumber, ", ").concat(userAdress);
console.log(result);
console.log(userName, _typeof(userName));
console.log(lastName, _typeof(lastName));
console.log(userAge, _typeof(userAge));
console.log(phoneNumber, _typeof(phoneNumber));
console.log(COLOR_WNITE_favorite, _typeof(COLOR_WNITE_favorite));
console.log(userAdress, _typeof(userAdress));
/*неправильні імена 

let 9name
let my-name
let Name
let let*/
// 3 Коментування коду:
//  рядок 

/* багато
 рядків*/

/*
COLOR_WNITE_favorite
phoneNumber
test12
test$*/
// NORMAL
// 1 task

var yourName = prompt('Ваше ім’я');
alert("\u043F\u0440\u0438\u0432\u0456\u0442, ".concat(yourName)); // 2 task

var yearOfBirch = prompt('Ваш рік народження?');
var currentYear = 2022;

if (+yearOfBirch > 0) {
  alert("\u0412\u0430\u043C ".concat(currentYear - yearOfBirch, " \u0440\u043E\u043A\u0456\u0432!"));
} else {
  alert("".concat(yearOfBirch, " \u043D\u0435 \u0447\u0438\u0441\u043B\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"));
} // 3 task Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата


var initialSideLenght = prompt('Вкажіть довжину сторони квадрату?');
var convertSideLenght = +initialSideLenght; // перетворення в число

if (convertSideLenght > 0) {
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0441\u043A\u043B\u0430\u0434\u0430\u0454: ".concat(convertSideLenght * 4));
} else {
  alert("".concat(initialSideLenght, " \u043D\u0435 \u0447\u0438\u0441\u043B\u043E"));
}

;
/* другий варіант
const SideLenght = prompt('Вкажіть довжину сторони квадрату?');

if(+SideLenght > 0) {
    alert(`Периметр квадрату складає: ${+SideLenght*4}`)
} else {
    alert(`${SideLenght} не число`)
};*/
// MAXIMUM
//1 task Запитай у користувача радіус кола і виведи площу такої окружності.

var circleRadius = prompt('Вкажіть радіус кола?');
var circleRadiusNumber = parseFloat(circleRadius); // можливо буде NaN  або число( перетворення в число)

if (circleRadiusNumber > 0) {
  // const circleSquare = Math.PI*Math.sqrt(circleRadiusNumber); коротший варіант
  // alert(`Площа окружності складає: ${circleSquare}`);коротший варіант
  alert("\u041F\u043B\u043E\u0449\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 \u0441\u043A\u043B\u0430\u0434\u0430\u0454: ".concat(3.14 * (circleRadiusNumber * circleRadiusNumber))); //3.14 - Math.PI
} else {
  alert("".concat(circleRadius, " \u043D\u0435 \u0447\u0438\u0441\u043B\u043E"));
}

;
/*2 task Запитай у користувача відстань в кілометрах між двома містами і за скільки годин 
він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/

var distanse = prompt('Please, insert the distance between the two cities?');
var distanseNumber = parseFloat(distanse);

if (distanseNumber > 0) {
  alert("Hence the distance: ".concat(distanseNumber, " kilometer"));
} else {
  alert("".concat(distanse, " not a number"));
}

;
var drivingTime = prompt('Please, insert the time of movement');
var drivingTimeNumber = parseFloat(drivingTime);

if (drivingTimeNumber > 0) {
  alert("Required movement speed: ".concat(distanseNumber / drivingTimeNumber, " kilometers / hour"));
} else {
  alert("".concat((distanse, drivingTime), " not a number"));
}

; // const distanse = prompt('Please, insert the distance between the two cities?');
// const distanseNumber = parseFloat(distanse);
// const drivingTime = prompt('Please, insert the time of movement');
// const drivingTimeNumber = parseFloat(drivingTime);
// if(distanseNumber > 0) {
//     const drivingTime = prompt('Please, insert the time of movement') 
// } else {
//     alert(`${distanse, drivingTime} not a number`)
// };

/*3 task Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.*/

var dollarAmount = prompt('Please, insert dollar amount');
var dollarEuroDifference = 1.0004;
var dollarAmountNumber = parseFloat(dollarAmount);

if (dollarAmountNumber > 0) {
  alert("amount in euro: ".concat(dollarAmountNumber / dollarEuroDifference));
} else {
  alert("".concat(dollarAmount, " not a number"));
}

;
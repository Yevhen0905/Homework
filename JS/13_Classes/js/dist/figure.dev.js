"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Завдання 1
// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.
var Circle =
/*#__PURE__*/
function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    this.radius = radius;
  }

  _createClass(Circle, [{
    key: "area",
    // обчислення площі
    value: function area() {
      return (Math.PI * Math.pow(this._radius, 2)).toFixed(2);
    } //обчислення довжини кола

  }, {
    key: "length",
    value: function length() {
      return (2 * Math.PI * this._radius).toFixed(2);
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    },
    set: function set(value) {
      this._radius = value;
    } // обчислення діаметра

  }, {
    key: "diameter",
    get: function get() {
      return this._radius * 2;
    }
  }]);

  return Circle;
}();

var circle = new Circle('25');
console.log(circle.radius);
console.log('Діаметр = ' + circle.diameter);
console.log('Площа = ' + circle.area());
console.log('Довжина = ' + circle.length()); // Завдання 2
// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.
// Продемонструй роботу написаних методів.

var str = 'frontend developer the best profession';

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, inkPercent) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.inkPercent = 39;
  }

  _createClass(Marker, [{
    key: "writeInk",
    value: function writeInk(str) {
      var strСonnect = str.replaceAll(' ', ''); // метод з'єднуємо всі знаки без пробілів

      if (strСonnect.length * 0.5 <= this.inkPercent) {
        return str;
      } else {
        var strArr = str.split();
        (this.inkPercent - strArr.length) / .5;
        str.splice(str.length, 3);
        str.join();
      } // console.log(str.replaceAll(' ', ''));

    }
  }]);

  return Marker;
}();

console.log(str); // class SetFull extends Marker {
//     constructor(color, inkPercent) {
//         super(color, inkPercent);
//     }
//     get getSetFull() {
//         return 100 - this.inkPercent
//     }
// }
// Завдання 3
// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

var Employee = function Employee(firstName, lastName, position) {
  _classCallCheck(this, Employee);

  this.firstName = firstName;
  this.lastName = lastName;
  this.position = position;
};

var emp1 = new Employee('Vasilenko', 'Evgen', 'director');
var emp2 = new Employee('Skiba', ' Alex', 'manager');
var emp3 = new Employee('Kutova', 'Olia', 'cashier');
var empArr = [emp1, emp2, emp3];
console.log(empArr);
"use strict";

//Вивід console.log
function show(data) {
  console.log(data);
} //MIN 
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
// обсяг паливного баку,середня витрата палива на 100 км., водії), 
// і наступні методи для роботи з цим об'єктом:
// 1. Метод, який виводить на екран інформацію про автомобіль.
// 2. Додавання ім’я водія у список
// 3. Перевірка водія на наявність його ім’я у списку
// 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані
//    з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно 
//    робити перерву на 1 годину. 


var cars = {
  manufactur: 'Renault Group',
  model: 'megane',
  year: 2014,
  speed: 50,
  volumeBak: 60,
  fuelLitres: 5,
  drivers: ['igor'],
  yourCar: function yourCar() {
    show(this);
  },
  addDrivers: function addDrivers(item) {
    this.drivers.push(item);
  },
  isDriver: function isDriver(item) {
    show(this.drivers.includes(item));
  },
  userСount: function userOunt(distance) {
    var consumptionLiters = distance / 100 * this.fuelLitres;
    var time = parseFloat(distance / this.speed);

    if (time > 4) {
      var restTime = Math.trunc(time / 4);
      time += restTime;
    }

    show("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0430\u043B\u0438\u0432\u0430 ".concat(consumptionLiters, " \u043B\u0456\u0442\u0440\u0456\u0432, \u0447\u0430\u0441 ").concat(time, " \u0433\u043E\u0434\u0438\u043D"));
  }
};
cars.yourCar();
cars.addDrivers('oleg');
cars.isDriver('igor');
cars.userСount(1567); //NORMA
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 1. Для виведення часу на екран.
// 2. Зміни часу на передану кількість секунд.
// 3. Зміни часу на передану кількість хвилин.
// 4. Зміни часу на передану кількість годин.
// 5. Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, 
//    може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, 
//    то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість 
//    того що користувач може передати 150 секунд, або 75 хвилин.

var time = {
  hours: 20,
  minutes: 59,
  seconds: 45,
  showTime: function showTime() {
    show('Значення часу = ' + this.hours + ' годин, ' + this.minutes + ' хвилин, ' + this.seconds + ' секунд');
  },
  // 1.
  setSeconds: function setSeconds(seconds) {
    this.seconds += seconds;

    if (this.seconds >= 60) {
      this.hours = this.hours + Math.trunc(this.minutes / 60);
      this.minutes = this.minutes + Math.trunc(this.seconds / 60);
      this.seconds = this.seconds % 60;
    } // 2.

  },
  setMinutes: function setMinutes(minutes) {
    this.minutes += minutes;

    if (this.minutes >= 60) {
      this.hours = this.hours + Math.trunc(this.minutes / 60);
      this.minutes = this.minutes % 60;
    } //3

  },
  setHours: function setHours(hours) {
    this.hours += hours;
  } //4

};
time.showTime();
time.setSeconds(10);
time.setMinutes(30);
time.setHours(0);
show('Значення часу = ' + time.hours + ' годин, ' + time.minutes + ' хвилин, ' + time.seconds + ' секунд'); //MAX
// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// 1. Складання 2-х об'єктів-дробів.
// 2. Віднімання 2-х об'єктів-дробів.
// 3. Множення 2-х об'єктів-дробів.
// 4. Ділення 2-х об'єктів-дробів.
// 5. Скорочення об'єкта-дробу.
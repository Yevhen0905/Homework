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
  averageSpeed: '50km/h',
  volumeBak: '60 liters',
  fuelLitres: '5 liters',
  theDriver: ''
}; ///1

function infoCars(obj) {
  show(obj);
}

;
infoCars(cars); ///2

cars.theDriver = 'Evgen'; ///3
// show(cars.year === undefined);

function isCheck(obj) {
  for (var key in obj) {
    return console.log('true');
  }

  return show('false');
}

;
isCheck(cars.theDriver); ///4

var distance = '788km';
var restPeriod = 4; //Розрахунок спочатку часу на подолання шляху

function timeOfMovement(a, b) {
  return Math.round(parseFloat(a) / parseFloat(b)); //округляю найближче ціле число     
} //+ з часом відпочинку


function timeMovementAndRelax(a, b) {
  var localB = parseFloat(b);

  if (localB === 0) {
    return 'Divider by zero'; //передбачення, на ноль не ділиться
  }

  return a + Math.floor(a / localB); //округляю вниз до найближчого меншого числа    
}

show("\u041D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u0447\u0430\u0441 \u0440\u0443\u0445\u0443 ".concat(timeMovementAndRelax(timeOfMovement(distance, cars['averageSpeed']), restPeriod), " \u0433\u043E\u0434\u0438\u043D")); //ДРУГИЙ ВАРІАНТ
// let distance = '788km';
// let restPeriod = 4;
// let restBreak = '1hours';
//  //Розрахунок спочатку часу на подолання шляху
//  function timeOfMovement(a, b) {
//     return (parseFloat(a) / parseFloat(b));          
// }
// //+ з часом відпочинку
// function timeMovementAndRelax(a, b, c) {
//     const localB = parseFloat(b);
//     const localC = parseFloat(c);
//         if(localB === 0) {
//                 return 'Divider by zero'   //передбачення, на ноль не ділиться
//         }
//     return a + (a / localB * localC - localC);
// }  
// show(`Необхідний час руху ${timeMovementAndRelax(timeOfMovement(distance, cars['averageSpeed']), restPeriod, restBreak)} годин`);
//Розрахунок літрів

function counterLiters(a, b) {
  return parseFloat(a) * parseFloat(b) / 100;
}

show("\u0412\u0438\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0430\u043B\u0438\u0432\u0430 \u043D\u0430 \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u0456 ".concat(distance, " \u0441\u043A\u043B\u0430\u0434\u0430\u0454 ").concat(counterLiters(distance, cars['fuelLitres']), " \u043B\u0456\u0442\u0440\u0456\u0432")); //NORMA
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
  hours: 1,
  minutes: 34,
  seconds: 30
};

function showTime() {
  alert('Значення часу =' + this.hours + 'годин,' + this.minutes + 'хвилин,' + this.seconds + 'секунд');
}

time.showTime(); //MAX
// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// 1. Складання 2-х об'єктів-дробів.
// 2. Віднімання 2-х об'єктів-дробів.
// 3. Множення 2-х об'єктів-дробів.
// 4. Ділення 2-х об'єктів-дробів.
// 5. Скорочення об'єкта-дробу.
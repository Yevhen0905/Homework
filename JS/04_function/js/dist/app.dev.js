"use strict";

// MIN
// 1.Напиши всі можливі варіанти створення функцій.
//function declaration
function showName(userName) {
  console.log("\u043F\u0440\u0438\u0432\u0456\u0442 ".concat(userName));
}

;
showName('Ivan'); // Function expression

var getName = function getName(a, b) {
  a + b;
};

console.log('привіт', 'Ivan'); // row function

var sayName = function sayName(name) {
  return 'Привіт ' + name;
};

console.log(sayName('Ivan')); // 2.Створи функцію, яка буде виводити кількість переданих їй аргументів.

function calculationArg() {
  return arguments.length;
}

console.log(calculationArg(1, 2, 3, 4)); // 3.Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function checkNum(a, b) {
  if (parseFloat(a) && parseFloat(b) && a && b) {
    //перевіряємо на число
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    if (a === b) {
      return 0;
    }
  } else return 'no';
}

console.log(checkNum(3, 9));
console.log(checkNum(9, 3));
console.log(checkNum(3, 3)); // 4.Напиши функцію, яка обчислює факторіал переданого їй числа.
// Факторіал числа n це добуток натуральних чисел від 1 до n.

function calculationFactorial(num) {
  var result = 1;

  if (num > 0 && num && parseFloat(num)) {
    for (var _i = 1; _i <= num; _i++) {
      result *= _i;
    }

    return result;
  } else return 'no';
}

console.log(calculationFactorial(5)); // 5.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function getMoldNum(a, b, c) {
  a = a.toString();
  b = b.toString();
  c = c.toString();
  return parseFloat(a + b + c); // другий варіант // return parseFloat('' + a + b + c);
}

console.log(getMoldNum(3, 6, 9)); // 6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function square(a, b) {
  return b > 0 ? a * b : a * a;
}

console.log(square(5, 10));
console.log(square(5)); // MAX 
// 1. Напиши функцію, яка перевіряє, чи є передане їй число 
// “досконалим числом”. Досконале число - це число, яке дорівнює сумі 
// всіх своїх дільників.

var candidateNum = prompt('Введіть число більше 1');

function perfectNum(a) {
  var result = 0;

  for (i = 1; i < a; i++) {
    if (a % i === 0) {
      result += i;
    }
  }

  return a === result ? 'Perfect' : 'Unperfect';
}

function checkDataFormat(data) {
  var convertData = parseFloat(data);

  if (convertData > 0) {
    console.log(perfectNum(convertData));
  } else {
    alert('Не вірні дати');
  }
}

checkDataFormat(candidateNum); // 2. Напиши функцію, яка приймає мінімальне і максимальне значення 
// для діапазону, і виводить тільки ті числа з діапазону, які є 
// досконалими. Використовуй написану раніше функцію, щоб дізнатися, 
// чи є це число досконалим.

var initial = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0430");

var _final = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0430");

function searchPerfectNum(a, b) {
  for (var _i2 = a; _i2 <= b; _i2++) {
    console.log("\u0447\u0438\u0441\u043B\u043E ".concat(_i2, " \u0454 ").concat(perfectNum(_i2)));
  }

  return;
}

searchPerfectNum(initial, _final); // Показує всі число в діапазоні, які досконалі, які ні.
// Ковирявся, ковирявся, так і не вийшло відсікти не досконалі(((
// Мабіть для цього треба переписати функцію перевірки досконалого числа
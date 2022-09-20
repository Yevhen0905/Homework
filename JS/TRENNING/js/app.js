


// function checkAge(age)  {
//     if(age > 18) {
//         return true;
//     }
//     else {
//         return confirm('Батьки дозволили');
//     }
// }

// checkAge(19); 
///////////////////////////////////////////////////////////////////////
//добавляю нулі до одиниць


// // Function DECLARETION
// myArr1 = [3, 8, 24, 86, 2, 1, 9];

// function convertToZero(num) {
//     if(num < 10) {
//         return '0' + num;
//     }
//     return num
// };

// function checkArr(arr) {
//     for(const item of arr) {
//         console.log(convertToZero(item));
//     }
// }

// checkArr(myArr1);
// //////////////////////////////////////////////////////////////////////

// // Function expression

// const calculator = function(a, b, operator) {
//     const localA = parseFloat(a);  //передбачення 
//     const localB = parseFloat(b);  //передбачення
//     if(localB === 0) {
//         return 'Divider by zero'   //передбачення, на ноль не ділиться
//     }

//     if(operator === '*') {
//         return localA * localB;
//     }
//     if(operator === '+') {
//         return localA + localB;
//     }
//     if(operator === '/' ) {
//         return localA / localB;
//     }
// }

// console.log(calculator(40, 50, '+'))

// В кожній функції повинен бути обробленний крайній випадок коли не корректні дані, які зламають все

/////////////////////////////////////////////////////////////////////////
// IIFE 
// Immediately  Негайно
// Invoked  Викликано
// Function
// Expression

// (function() {
//     console.cog('hello');
// })() вказує на виклик її

///////////////////////////////////////////////////////////////////

// pure function
// - get arguments  - мають буnи аргументи
// - qual result with the same data - при олнакових аргументах давати однаковий результат
// - no sideeffect - не має сторонніх еффектів


////////////////////////////////////////////////////////////////////////////////////////

// arrow function

// const sayHello = (name) => {
//     return 'hello' + name;
// }

// console.log(sayHello('Evgen')); //перевага швидкість, якщо один рядок умови можна скоротити

// const sayHello = (name) => 'hello' + name;  //автоматично повертають те що йде після стрілки


// function convertToZero(num) {
//     if(num < 10) {
//         return '0' + num;
//     }
//     return num
// };
// function convertToZero = num => num < 10 ? '0' + num: num;
//   
///////////////////////////////////////////////////////////////////////////
//setTimeout(() => {console.log('hello world');}, 5000) //оголошення, тіло, вивід
/////////////////////////////////////////////////////////////////////////////////////////
// Функція вищого порядку, яка містить в собі функцію або повертає функцію

// callbak 

// const calculator = function(a, b, operator, callbak) {
//     const localA = parseFloat(a);  //передбачення 
//     const localB = parseFloat(b);  //передбачення
//     if(localB === 0) {
//         return 'Divider by zero'   //передбачення, на ноль не ділиться
//     }

//     if(operator === '*') {
//         callbak(localA * localB);
//         return;
//     }
//     if(operator === '+') {
//         callbak(localA + localB);
//         return;
//     }
//     if(operator === '/' ) {
//         callbak(localA / localB);
//         return;
//     }
// }

// function displayResult(result) {
//     document.getElementById('result').innerHTML = result;
// }

// console.log(calculator(40, 50, '+', displayResult(без дужок)));
//////////////////////////////////////////////////////////////
// let enterNum = prompt('Введіть 10 чисел через кому');

// enterNumArray = enterNum.split(',');

// for (i = 0; i < enterNumArray.length; i++) {
//     enterNumArray[i] = parseFloat(enterNumArray[i].trim()) //вбирає пробіли на початку і кінці строки
// }

// console.log(enterNum);
/////////////////////////////////////////////////////




// Object

// let user = {};

// user.name = 'Іван';
// user.surname = 'Сміт';

// user.name = 'Петро';

// delete user.name;

// console.log(user);
////////////////////////////////////////////////////////////

// let user = {};

// alert(user.name === undefined);

//////////////////////////////////////////////////

// Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.

// let user = {
//    name: 'Ivan',
// };

// function isEmpty(obj) {
//     for (let key in obj) {
//         return  console.log('false');
//     }
//     return console.log('true');
// };

// isEmpty(user);

//////////////////////////////////////////////////////////

// У нас є об’єкт для зберігання заробітної плати нашої команди:

// let salaries = {
//     John: 150,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0;
// for(let key in salaries) {
//     sum += salaries[key];
// }  
// console.log(sum);

// function calcSumSalaries(obj) {
//     let sum = 0;
//     for(let key in obj) {
//        sum += obj[key];    
//     }
//     console.log(sum);
// }

// calcSumSalaries(salaries);

/////////////////////////////////////////////////////////////

// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
//   };

// function multiplyNumeric(obj) {

//     for(let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     console.log(obj[key]);    
//     } 
// }

// multiplyNumeric(menu);

// console.log(menu);


//ARRAY

// let myArray = [
//     'ivan',
//     356,
//     false,
//     {
//         userName: 'Igor',
//         age: 22
//     },
//     undefined,
//     null,
//     NaN,
//     [
//         1,2,3
//     ],
//     function() {
//         console.log('Im inside the array');
//     },
//     'Kubik'
// ];
 

// console.log(myArray[2]); //element
// console.log(myArray.length); //довжина 
// console.log(myArra[myArray.length-1]); //останній 
// console.log(myArray.at(-1));  // новий оператор 

// // визвати функцію з массива

// myArray.at(-2)(); // аналогічно до 
// myArray[8]();

// //змінювати

// myArray[1] = 333;
// console.log(matrix[0][1]); //  вивести з матриці
// console.log(myArray[3].age); //елемент з об'єкта


// // РОБОТА З МАСИВАМИ
// let myArray = [1, 2, 3, 4];
// //видалення елементів

// myArray.shift(); // першого
// myArray.pop(); // останій
// myArray.unshift() // спереді додаваняя
// myArray.push(); // з кінця додавання

// for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i]);
// }
// //більш зручний
// for (const key of Array) {
//     console.log(key);
// }
////////////////////////////////////////////////

// forEach

// let myNewArray = ['apple', 'love', 'javascript'];

// function rewertWord(word) {
//    console.log(word.split('').reverse().join(''));
// }

// let revertMyNewArray = myNewArray.forEach(function(item) {
//     rewertWord(item)
// });
//let revertMyNewArray = myNewArray.forEach(item => rewertWord(item)); //скорочено
/////////////////////////////////


///Map
// let myNewArray = ['apple', 'love', 'javascript'];

// function rewertWord(word) {
//    return word.split('').reverse().join('');
// };

// let revertMyNewArray = myNewArray.map(item => rewertWord(item));

// console.log(revertMyNewArray);
//////////////////////////////


// indexOf, lastIndexOf, includes  для пошуку елемента


// let myArray = ['apple', 'love', 'javascript'];

// console.log(myArray.indexOf('javascript')) //повертає індексперший

// console.log(myArray.lastIndexOf('javascript')) //останнього який є в пошуку

// //якщо нема перевірка
//  if(myArray.includes('vodka') === -1) {      // includes булевий перевірка на присутність
//     console.log('no vodka');
//  }

///////////////////
// find & findIndex

// let myArray = [      //отриманя із складноЇ структури
//     {
//         itemName: 'apple',
//         id: '675674',
//     },
//     {
//         itemName: 'peach',
//         id: '676784',
//     },
//     {
//         itemName: 'iphone',
//         id: '765697',
//     },
//     {
//         itemName: 't-shirt',
//         id: '67587996',
//     },
//     {
//         itemName: 'iphone',
//         id: '765464',
//     }
// ];

// let findedObj = myArray.find(item =>  item.itemName === 'iphone');  //знаходить перший які відповідають критерію пошуку
// console.log(findedObj);
// let findedObj = myArray.filter(item =>  item.itemName === 'iphone'); //знаходить всі які відповідають критерію пошуку
// console.log(findedObj);

/////////////////////
// сортування

// let myArray = [5, 9, 3, 6];

// function sortHelper(a, b) {
//     if(a > b) return 1;
//     if(a == b) return 0;
//     if(a < b) return -1;
// }

// myArray.sort(sortHelper)

// console.log(myArray);
//////////////////////////////////////////////////////////////////////////
// DOM
//Selectors

//отримання по id 
// const targetElement = document.getElementById('greetings');
// console.log(targetElement); 

// отримання по класу
// const targetElement = document.getElementsByClassName('greetings');
// console.log(targetElement[0]); 

// звертатися по Name підходить для input утворює масиовподібний елемент якщо навіть
// один елемент на сторінці
// const targetElementVal = document.getElementsByName('text-input').value;

// const targetElementVal = document.getElementsByTagName('text-input');

// const targetElementVal = document.querySelector('.greetings');
// console.log(targetElementVal); 


/////////////////////////////////////////////////
// Manipulation
// textContent  текстовий вузол
// let userName = prompt('Name');
// const targetElement = document.querySelector('#greetings');
// targetElement.textContent = (`Hello, ${userName}`);
// document.querySelector('#greetings').textContent = userName

//дозволяє добавляти теги в розмітку html
// targetElementVal.innerHTML = (`<h1>Hello, ${userName}</h1>`);


// const h1 = document.createElement('h1');
// h1.textContent = (`Hello, ${userName}`);

// targetElement.appendChild(h1); 


//ПРИКЛАД DOM
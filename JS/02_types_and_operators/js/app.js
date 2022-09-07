//ДЛЯ СЕБЕ

// let n=2;
// n += 5; n + 5 = 7
// n *= 2; n * 2 = 14
// console.log(n);

// let a = parseFloat(prompt("Перше число?", 1));
// let b = parseFloat(prompt("Друге число?", 2));

// alert(a+b);

// const nameOfficial = prompt('Яка “офіційна” назва JavaScript?')
// if( nameOfficial == 'ECMAScript' ) {
//     alert('Правильно')
// } else {
//     alert('Не знаєте? ECMAScript!')
// }

// let numberEnter = prompt('enter number');
// if(numberEnter>0) {
//     alert(1);
// } else if(numberEnter<0) {
//     alert(-1);
// } else {
//     alert(0);
// };
// let result = (a + b < 4) ? 'Нижче': 'Вище';



//SOLUTION

// MIN 

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let a = parseFloat((0.1 + 0.2).toFixed(1)); // toFixed - заокругдення до одного знака після коми

console.log(a); 

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const b = '1';
const c = 2;

console.log(parseInt(b) +c);

/*3 . Користувач вказує обсяг флешки в Гб.
 Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.*/

let flashDriveVolume = '1GB';
const fileVolume = '820Mb';
const oneGb = '1024Mb';
flashDriveVolume = oneGb;

console.log(parseInt(parseInt(flashDriveVolume) / parseInt(fileVolume)));


// NORMAL

/*1.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
Програма виводить скільки шоколадок може купити користувач і скільки 
здачі у нього залишиться.*/

const amountOfMoney = prompt('Введіть суму грошей в гаманці?')

const priceOfChocolate = prompt('Введіть ціну однієї шоколадки?');
 if((parseFloat(amountOfMoney) > 0) && (parseFloat(priceOfChocolate) >= 0))  {
    let amountOfChocolate =  Math.floor(amountOfMoney/priceOfChocolate);  // Math.floor  заокруглення вниз, отримав кількість
    console.log(`Можете купити ${amountOfChocolate} шоколадок`);
    let balanceOfMoney = amountOfMoney % priceOfChocolate;  // порахував залишок 
    console.log(`Залишок мани ${balanceOfMoney}`);
 } else {
    console.log('Введіть корректні дані. Всі числа повині бути більше нуля'); 
 };
//  ALERT
// const amountOfMoney = prompt('Введіть суму грошей в гаманці?')

// const priceOfChocolate = prompt('Введіть ціну однієї шоколадки?')
//  if((parseFloat(amountOfMoney) > 0) && (parseFloat(priceOfChocolate) >= 0))  {
//     let amountOfChocolate =  Math.floor(amountOfMoney/priceOfChocolate);
//     alert(`Можете купити ${amountOfChocolate} шоколадок`);
//     let balanceOfMoney = amountOfMoney % priceOfChocolate;
//     alert(`Залишок мани ${balanceOfMoney}`);
//  } else {
//     alert('Введіть корректні дані. Всі числа повині бути більше нуля');
//  };


/*2.Запитай у користувача тризначне число і виведи його задом наперед. 
Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).*/

let userDigit = prompt('Введіть тризначне число');

if((parseFloat(userDigit) > 99) && (1000 > parseFloat(userDigit))) {
    let userDigitString = userDigit.toString();  // перевів в string
    let revertDigit = Array.from(userDigitString).reverse().join(''); // перевів в масив, перевернув, перевів в стрінгу
    console.log(parseFloat(revertDigit)); // результат в цифрі
} else {
    console.log('Ви не вели три цифри');
}


// MAX 

/*1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних.
 Вивести суму нарахованих відсотків.*/

 let depositAmount = parseFloat(prompt('Введіть суму вкладу:'));
 let timeDeposit = parseFloat(prompt('Введіть термін депозиту місяців:'));
 let yearPercent = '5%';

 if(depositAmount > 0) {
    const depositFromPercent = depositAmount / 100 * parseFloat(yearPercent) / 12 * timeDeposit; // порахував суму з процентів
    const incomeUser = depositFromPercent + depositAmount; // порахував прибуток
    console.log(incomeUser);
} else {
    console.log('Введіть суму не менше 1');
}

//2. Що повернуть вирази:

2 && 0 && 3; // поверне 0 тому що && вибирає false
2 || 0 || 3 //  поверне 2 тому що || вибирає перше true
2 && 0 || 3 //  поверне 3 




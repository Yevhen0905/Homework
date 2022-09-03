
// MIN

// 2 придумай до 4-х імен змінних, що потрібні тобі для даної задачі

const userName = 'Evgen';
const lastName = 'Vittsenko';
const userAge = 39;
const phoneNumber = '06709889765';
const COLOR_WNITE_favorite = '#fff';
const userAdress = {
    street: 'Tovaryska',
    house: 15
}

const result = `${userName}, ${lastName}, ${userAge}, ${phoneNumber}, ${userAdress}`; 
console.log(result);

console.log(userName, typeof userName);
console.log(lastName, typeof lastName);
console.log(userAge, typeof userAge);
console.log(phoneNumber, typeof phoneNumber);
console.log(COLOR_WNITE_favorite, typeof COLOR_WNITE_favorite);
console.log(userAdress, typeof userAdress);

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
let yourName = prompt('Ваше ім’я')

alert(`привіт, ${yourName}`);



// 2 task
let yearOfBirch = prompt('Ваш рік народження?');
const currentYear = 2022;

if(+yearOfBirch>0) {
alert(`Вам ${currentYear-yearOfBirch} років!`);
} else {
    alert(`${yearOfBirch} не числове значення`)
}



// 3 task Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

const initialSideLenght = prompt('Вкажіть довжину сторони квадрату?');
const convertSideLenght = +initialSideLenght; // перетворення в число

if(convertSideLenght > 0) {
    alert(`Периметр квадрату складає: ${convertSideLenght*4}`)
} else {
    alert(`${initialSideLenght} не число`)
};

/* другий варіант
const SideLenght = prompt('Вкажіть довжину сторони квадрату?');

if(+SideLenght > 0) {
    alert(`Периметр квадрату складає: ${+SideLenght*4}`)
} else {
    alert(`${SideLenght} не число`)
};*/






// MAXIMUM
//1 task Запитай у користувача радіус кола і виведи площу такої окружності.

const circleRadius = prompt('Вкажіть радіус кола?');
const circleRadiusNumber = parseFloat(circleRadius); // можливо буде NaN  або число( перетворення в число)
if(circleRadiusNumber > 0) {
    // const circleSquare = Math.PI*Math.sqrt(circleRadiusNumber); коротший варіант
    // alert(`Площа окружності складає: ${circleSquare}`);коротший варіант
    alert(`Площа окружності складає: ${3.14*(circleRadiusNumber*circleRadiusNumber)}`) //3.14 - Math.PI
} else {
    alert(`${circleRadius} не число`)
};

/*2 task Запитай у користувача відстань в кілометрах між двома містами і за скільки годин 
він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/

const distanse = prompt('Please, insert the distance between the two cities?');
const distanseNumber = parseFloat(distanse);

if(distanseNumber > 0) {
    alert(`Hence the distance: ${distanseNumber} kilometer`) 
} else {
    alert(`${distanse} not a number`)
};

const drivingTime = prompt('Please, insert the time of movement');
const drivingTimeNumber = parseFloat(drivingTime);

if(drivingTimeNumber > 0) {
    alert(`Required movement speed: ${distanseNumber/drivingTimeNumber} kilometers / hour`) 
} else {
    alert(`${distanse, drivingTime} not a number`)
};

// const distanse = prompt('Please, insert the distance between the two cities?');
// const distanseNumber = parseFloat(distanse);

// const drivingTime = prompt('Please, insert the time of movement');
// const drivingTimeNumber = parseFloat(drivingTime);

// if(distanseNumber > 0) {
//     const drivingTime = prompt('Please, insert the time of movement') 
// } else {
//     alert(`${distanse, drivingTime} not a number`)
// };



/*3 task Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.*/

const dollarAmount = prompt('Please, insert dollar amount');
const dollarEuroDifference = 1.0004;

const dollarAmountNumber = parseFloat(dollarAmount);

if(dollarAmountNumber>0) {
    alert(`amount in euro: ${dollarAmountNumber/dollarEuroDifference}`)
} else {
    alert(`${dollarAmount} not a number`)
};







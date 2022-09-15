


// function checkAge(age)  {
//     if(age > 18) {
//         return true;
//     }
//     else {
//         return confirm('Батьки дозволили');
//     }
// }

// checkAge(19); 

//добавляю нулі до одиниць


// Function DECLARETION
myArr1 = [3, 8, 24, 86, 2, 1, 9];

function convertToZero(num) {
    if(num < 10) {
        return '0' + num;
    }
    return num
};

function checkArr(arr) {
    for(const item of arr) {
        console.log(convertToZero(item));
    }
}

checkArr(myArr1);


// Function expression

const calculator = function(a, b, operator) {
    const localA = parseFloat(a);  //передбачення 
    const localB = parent(b);  //передбачення
    if(localB === 0) {
        return 'Divider by zero'   //передбачення, на ноль не ділиться
    }

    if(operator === '*') {
        return localA * localB;
    }
    if(operator === '+') {
        return localA + localB;
    }
    if(operator === '/' ) {
        return localA / localB;
    }
}

console.log(calculator(40, 50, '+'))

// В кожній функції повинен бути обробленний крайній випадок коли не корректні дані, які зламають все


// IIFE 
// Immediately  Негайно
// Invoked  Викликано
// Function
// Expression
// (function() {
//     console.cog('hello');
// })() вказує на виклик її



// pure function
// - get arguments  - мають буеи аргументи
// - qual result with the same data - при олнакових аргументах давати однаковий результат
// - no sideeffect - не має сторонніх еффектів




// arrow function

const sayHello = (name) => {
    return 'hello' + name;
}

console.log(sayHello('Evgen')); //перевага швидкість, якщо один рядок умови можна скоротити

// const sayHello = (name) => 'hello' + name;  //автоматично повертають те що йде після стрілки


// function convertToZero(num) {
//     if(num < 10) {
//         return '0' + num;
//     }
//     return num
// };
// function convertToZero = num => num < 10 ? '0' + num: num;
//     // if(num < 10) {
//     //     return '0' + num;
//     // }
//     // return num

setTimeout(() => {console.log('hello world');}, 5000) //оголошення, тіло, вивід

// Функція вищого порядку, яка містить в собі функцію або повертає функцію

// callbak 

// const calculator = function(a, b, operator, callbak) {
//     const localA = parseFloat(a);  //передбачення 
//     const localB = parent(b);  //передбачення
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
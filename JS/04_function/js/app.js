// MIN

// 1.Напиши всі можливі варіанти створення функцій.

//function declaration
function showName(userName) {
     console.log(`привіт ${userName}`)
};

showName('Ivan');

// Function expression

const getName = function(a, b) {
   a + b;
}

console.log('привіт', 'Ivan');

// row function

const sayName = (name) => {
    return 'Привіт ' + name;
}

console.log(sayName('Ivan'));



// 2.Створи функцію, яка буде виводити кількість переданих їй аргументів.

function calculationArg() {
    return arguments.length;
} 

console.log(calculationArg(1, 2, 3, 4));

// 3.Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function checkNum(a, b) {
    if(parseFloat(a) && parseFloat(b) && a && b) { //перевіряємо на число
        if(a < b) {
            return -1;
        }
        if(a > b) {
            return 1
        }
        if(a === b) {
            return 0;
        }
    }   
    else return('no')
}

console.log(checkNum(3, 9));
console.log(checkNum(9, 3));
console.log(checkNum(3, 3));


// 4.Напиши функцію, яка обчислює факторіал переданого їй числа.
// Факторіал числа n це добуток натуральних чисел від 1 до n.

function calculationFactorial(num) {   
    let result = 1;
    if (num > 0 && num && parseFloat(num)) {   
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    } else return('no');
} 

console.log(calculationFactorial(5));

// 5.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function getMoldNum(a, b, c) {
    a = a.toString();
    b = b.toString();
    c = c.toString();

    return parseFloat(a + b + c);

    // другий варіант // return parseFloat('' + a + b + c);
}

console.log(getMoldNum(3, 6, 9));

// 6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function square(a, b) {
    return b > 0 ? a*b : a*a; 
}

console.log(square(5, 10));
console.log(square(5));

// MAX 

// 1. Напиши функцію, яка перевіряє, чи є передане їй число 
// “досконалим числом”. Досконале число - це число, яке дорівнює сумі 
// всіх своїх дільників.

const candidateNum = prompt('Введіть число більше 1');

function perfectNum(a) {
    let result = 0;
    for(i = 1; i < a; i++) {
        if(a % i === 0) {
            result += i;
        }
    }

    return a === result ? 'Perfect': 'Unperfect';
}



function checkDataFormat(data) {
    let convertData = parseFloat(data);

    if(convertData > 0) {
        console.log(perfectNum(convertData));
    } else {
        alert('Не вірні дати');
    }
}

checkDataFormat(candidateNum);



// 2. Напиши функцію, яка приймає мінімальне і максимальне значення 
// для діапазону, і виводить тільки ті числа з діапазону, які є 
// досконалими. Використовуй написану раніше функцію, щоб дізнатися, 
// чи є це число досконалим.

let initial = prompt(`Введіть перше число діапазона`);
let final = prompt(`Введіть перше число діапазона`);

function searchPerfectNum (a, b) {
    for(let i = a; i <= b; i++) {
       console.log(`число ${i} є ${perfectNum(i)}`);
    }  
    return
}

searchPerfectNum (initial, final);

// Показує всі число в діапазоні, які досконалі, які ні.
// Ковирявся, ковирявся, так і не вийшло відсікти не досконалі(((
// Мабіть для цього треба переписати функцію перевірки досконалого числа


//MIN 

// 1.Запитай у користувача його вік і визначи, ким він є: 
// дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
// передбач можливість введення невірних даних.

let userAge;

while(!userAge || !(+userAge > 0)) {
    userAge = prompt('Введіть ваш вік?');

    if (userAge > 0 && 11 >= userAge) { 
        alert('child');
        }
    else if (userAge>11 && 17>=userAge) { 
        alert('teenager');
    }
    else if (userAge>17 && 59>=userAge) {
        alert('adult');
    }
    else if (userAge>59) {
        alert('pensioner');
    } else {
       alert('Введіть цифрове значення вище 0'); 
    }
}


//    // другий варіант
// // let userAge = parseFloat(prompt('Введіть ваш вік?'));

// // if (userAge >= 0) {
// //     switch (true) {
// //         case (userAge > 0 && 11 >= userAge): 
// //         alert('child');
// //         break;
// //         case (userAge>11 && 17>=userAge): 
// //         alert('teenager');
// //         break;
// //         case (userAge>17 && 59>=userAge): 
// //         alert('adult');
// //         break;
// //         case (userAge>59): 
// //         alert('pensioner');
// //         break;   
// //     }
// // } else {
// //     alert('Введіть цифрове значення вище 0')
// // };

// // 2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
// // який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const userNum = parseFloat(prompt('Введіть число від 0 до 9'));

switch(userNum) {
    case 0:
        alert(')');
        break;
    case 1:
        alert('!');
        break;
    case 2:
        alert('@');
        break;
    case 3:
        alert('#');
        break;
    case 4:
        alert('$');
        break; 
    case 5:
        alert('%');
        break;
    case 6:
        alert('^');
        break;
    case 7:
        alert('&');
        break;
    case 8:
        alert('*');
        break;
    case 9:
        alert('(');
        break;
    default:
        alert('Введіть цифру в потрібному діапазоні'); 
};

//3.Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const initialNum = parseFloat(prompt('Вкажіть перше число діапазона'));
const finalNum = parseFloat(prompt('Вкажіть друге число діапазона'));

let sum = 0;

for (let i=initialNum; i<=finalNum; i++) {
sum += i;
};
alert(sum);

// 4.Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let oneNum = parseFloat(prompt('Вкажіть перше число'));
let secondNum = parseFloat(prompt('Вкажіть друге число'));

let NOD;

while(oneNum != secondNum) {
    oneNum>secondNum ? oneNum = oneNum - secondNum: secondNum = secondNum - oneNum;  
}

NOD = oneNum;
alert(NOD);

//5.Запитай у користувача число і виведи всі дільники цього числа.

const anyNum = parseFloat(prompt('Вкажіть будь-яке число, щоб взнати його дільники'));

for(i = 1; i <= anyNum; i++) {
   if (anyNum % i == 0) {
            console.log(i);
   }
}


// // NORMA 

// // 1.Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let userDigit;

while (!userDigit || !(+userDigit) > 0 || !(userDigit.toString().length ===5)) {

   userDigit = prompt('Введіть пятирозрядне число');

   if((parseFloat(userDigit) > 9999) && (100000 > parseFloat(userDigit))) {
      // let userDigitString = userDigit.toString();  // перевів в string
      let revertDigit = Array.from(userDigit).reverse().join(''); // перевів в масив, перевернув, перевів в стрінгу
      
      if(parseFloat(revertDigit) === parseFloat(userDigit)) {
         alert(`число ${userDigit} є полідромом`); 
      } else {
         alert('Число не є полідромом');
      } 

   } else {
      alert("Ви не вели п'ять цифр");
   };
};

// 2.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let amountPurchase = parseFloat(prompt('Вкажіть суму покупки'));
let percentageDiscount = 0;

if  (amountPurchase > 0) {
    
    if (amountPurchase >= 200 && 300 >= amountPurchase) {
    percentageDiscount = 3;
    }

    if (amountPurchase > 300 && 500 >= amountPurchase) {
    percentageDiscount = 5;
    }

    if (amountPurchase > 500) {
    percentageDiscount = 7;
    }

    const discountedAmount = amountPurchase - (amountPurchase * percentageDiscount/100);
    alert(`Cумa до оплати зі знижкою ${discountedAmount}`);
}
else {
    alert('вкажіть суму не меньше 200')
}

   // Другий варіант
// let amountPurchase = prompt('Вкажіть суму покупки');
// convertAmountPurchase = parseFloat(amountPurchase);
// let percentageDiscount;

// if(convertAmountPurchase >= 200 && 300 >= convertAmountPurchase) {
//     let percentageDiscount = 3;
//     const discountedAmount = convertAmountPurchase - (convertAmountPurchase * percentageDiscount/100);
//     alert(`Cумa до оплати зі знижкою ${discountedAmount}`);
// } else if(convertAmountPurchase > 300 && 500 >= convertAmountPurchase) {
//     let percentageDiscount = 5;
//     const discountedAmount = convertAmountPurchase - (convertAmountPurchase * percentageDiscount/100);
//     alert(`Cумa до оплати зі знижкою ${discountedAmount}`);
// } else if(convertAmountPurchase > 500) {
//     let percentageDiscount = 7;
//     const discountedAmount = convertAmountPurchase - (convertAmountPurchase * percentageDiscount/100);
//     alert(`Cумa до оплати зі знижкою ${discountedAmount}`);
// } else {
//     alert('вкажіть числове значення бельше 0')
// }

// 3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
//  від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. 
//  Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) 
//  для введення чисел користувачем.

let enterNum = prompt('Введіть 10 чисел через кому');

enterNumArray = enterNum.split(','); //розбиття рядок на масив рядків 


for (i = 0; i < enterNumArray.length; i++) {
    enterNumArray[i] = parseFloat(enterNumArray[i].trim()) //вбирає пробіли на початку і кінці строки
}

let positiv = 0;
let negativ = 0;
let zero = 0;
let evenNum = 0;
let oddNum = 0;

for (i = 0; i < enterNumArray.length; i++) {
    if (enterNumArray[i] > 0) {
        positiv++;
    }
    if (enterNumArray[i] < 0) {
        negativ++;
    }
    if (enterNumArray[i] ===0) {
        zero++
    }
    if (Math.abs(enterNumArray[i]) % 2 === 0) {
        evenNum++
    }
    if (Math.abs(enterNumArray[i]) % 2 !== 0) {
        oddNum++
    }
}

alert(`В рядку ${enterNumArray}
- ${positiv} додатніх чисел
- ${negativ} від'ємних чисел
- ${zero} нулів
- ${evenNum} парних чисел
- ${oddNum} непарних чисел
`);

// 4.Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити 
// наступний день? » і так до тих пір, поки користувач натискає OK.

let select;

weekday = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'];

i = 0;

do {
    select = confirm(weekday[i] + '. Хочеш побачити наступний день?');
    i++;
    if (i > 6) { i = 0 };
} while(select);

// MAX

// 1.Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним
//  способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у 
//  користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй 
//  діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав,
//   що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не 
//   вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").


prompt('загадайте число від 0 до 100');

let initial = 0;
let final = 100;
let N;
let yourNum;

while (initial <= final) {

   N = Math.floor((final + initial) / 2);
   
   if(confirm(`Ваше число більше ${N}? Якщо так - ОК, ні - відміна`)) {
      initial = N; 
      
   } else if(confirm(`Ваше число меньше ${N}? Якщо так - ОК, ні - відміна`)) {
      final = N;
   } else {
      yourNum = N;
      break
   }
} 

alert(`Ви загадали число: ${yourNum}`);



// 2.Виведи таблицю множення для всіх чисел від 2 до 9. 
// Кожне число необхідно помножити на числа від 1 до 10.

for (i = 1; i <= 10; i++) {
   for (j = 2; j <= 9; j++) { 
       console.log(`${i} x ${j} = ${i * j}`)
   }
}

// 3.Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
// Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
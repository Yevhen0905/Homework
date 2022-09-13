


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
"use strict";

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
  if (num < 10) {
    return '0' + num;
  }

  return num;
}

;

function checkArr(arr) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      console.log(convertToZero(item));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

checkArr(myArr1);
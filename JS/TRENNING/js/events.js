// function clickButtonHandler() {
//     event.preventDefault();
//     console.log('click');
// }

// додавання події в JS

// document.addEventListener('click', function(event) {
//      console.log(event);
// });

// document.addEventListener('keydown', function(event) {  // показує яка клавиша була натиснута
//     console.log(event);
// });

// document.addEventListener('keyup', function(event) {  // показує яка клавиша була відпущена
//     console.log(event);
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// попадання в бульбашку
// document.addEventListener('click', function(event) {
//     const bubble = document.querySelector('.bubble');

//     console.log(event.clientX, parseInt(bubble.style.left));

//     if(event.clientX <= (parseInt(bubble.style.left) + 10) && event.clientX >= (parseInt(bubble.style.left) - 10)) {
//         console.log('влучив');
//     }
// });

// // функція випадкових чисел
// function randomIntFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) +min)
// }

// // функція додавання бульбашки на сторінку
// function initGame() {
//     const bubble = document.querySelector('.bubble');

//     bubble.style.left = randomIntFromInterval(1, 500) + 'px';
//     bubble.style.top = randomIntFromInterval(1, 500) + 'px';
// };

// initGame();

////////////////////////////////////////////////////////////////////////
//додавання прослуховувача подій

// querySelector & querySelectorAll дают нам статичну коллекцію елементів, вони туди потрапляют один раз коли запустили и все

// getElementsByTagName & getElementsByClassName & getElementsByIdName  записує стежить і додає елементи


//////////////////////////////////////////////////////

// const li = document.getElementsByTagName('li');


 
// [...li].forEach(el => {             //для кожної li не треба робити цей шматок
//     el.addEventListener('click', function(e){
//         console.log('click on list item');
//     })
// })

// document.addEventListener('click', function(e) {   // прослідковує подію на всій сторінці. дивимся його таргет
//                                                   // правильній підхід додавання слухачів подій до елементів
//     if(e.target.nodeName === 'LI') {
//         console.log('click on li');
//     }
// })

// // буде реагувати на клік і додавати нове li
// function clickButtonHandler() {
//         const newLi = document.createElement('li');
//         newLi.textContent = 'new item';

//         const ul = document.querySelector('.list');

//         ul.append(newLi);

        // console.log(li); // до кожного з них прослуховувача подій 
    // }
    //////////////////////////////////////////////////////////////////////
    //зануреняя і вспливання

    
    // function eventHandlerBubble(e) {
    //     e.stopPropagation();  // зупиняє вспливання
    //     alert('click on span')
    // };

    ///////////////////////////////////////////////////////
    // функция вспливання- занурення
    // const elements = document.querySelectorAll('*');

    // [...elements].forEach(el => {
    //     el.addEventListener('click', function(e) {
    //         alert('click on ' + el.tagName);
    //     }, true);                  // змінює порядок вспливання, третя властивість листенера
    // })

    ////////////////////////////////////////////////////////
    //рух мишки

    //  document.addEventListener('mousemove', function(e) {
    //     console.log(e.clientX, e.clientY);
    //  })


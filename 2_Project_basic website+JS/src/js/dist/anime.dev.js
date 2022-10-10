"use strict";

var anchors = document.querySelectorAll('.anchor');
anchors.forEach(function (el) {
  //el - це ашки, будуть зберігатися по черзі
  el.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target.getAttribute('href')); //який елемент натиснули і за допомогою   getAttribute('href') отримати куди йдемо                  

    var targetSelector = e.target.getAttribute('href'); // отримали по чому клікаємо і куда рухаємся його селектор

    var targetEndElemant = document.querySelector(targetSelector); //місце куди скролить елемент
    // console.log(targetEndElemant);  

    var topPos = targetEndElemant.offsetTop; //  повертає відстань від елемента до верхньої частини документа
    // console.log(`Відстань між початком сторінки і обєктом ${targetSelector} дорівнює ${topPos}`);  

    window.scrollTo({
      //Window.scrollTo() metod проскорили вікно до певної позиції
      top: topPos,
      // використали topPos як параметр
      behavior: 'smooth'
    });
  });
}); //за допомогою JQUERY
// $(function() {
//     $('a[href*="#"]').on('click', function (e) {
//         e.preventDefault();
//         const link = $(this).attr('href');
//         if(link == '#projects') {
//             $('html, body').animate({
//             scrollTop: $($(this).attr('href')).offset().top
//         }, 500, 'linear');
//         }
//     });
// })
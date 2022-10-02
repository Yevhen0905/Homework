"use strict";

$(function () {
  $(".slider_card_item").click(function () {
    $(".slider_card_item").removeClass('active');
    $(this).addClass('active');
  });
}); // function changeStatus() {
//     const div = document.querySelector('.slider_card_item')
//     div.addEventListener('click', e => {
//         console.log(e.target);
//     })
// }
// changeStatus()
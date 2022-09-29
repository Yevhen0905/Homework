"use strict";

// jQuery ініцалізація кругова діаграма/кругла панель прогресу
$(function () {
  $('.chart').easyPieChart({// options here
  });
}); ///////////////////////////////////////////////////
// tabs ініцалізація

$(function () {
  $("#tabs").tabs();
}); /////////////////////////////////////////////////
// перемикання зірок

$(document).ready(function () {
  /* 1. Візуалізація речей під час наведення – перегляньте наступну частину для дій після натискання */
  $('#stars li').on('mouseover', function () {
    var onStar = parseInt($(this).data('value'), 10); // Зірка зараз наведена мишкою
    // Тепер виділіть усі зірки, які не знаходяться після поточної зірки

    $(this).parent().children('li.star').each(function (e) {
      if (e < onStar) {
        $(this).addClass('hover');
      } else {
        $(this).removeClass('hover');
      }
    });
  }).on('mouseout', function () {
    $(this).parent().children('li.star').each(function (e) {
      $(this).removeClass('hover');
    });
  });
  /* 2. Дія, яка виконується після натискання */

  $('#stars li').on('click', function () {
    var onStar = parseInt($(this).data('value'), 10); //Вибрана зірочка

    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    } // ПРОСТО ВІДПОВІДЬ (не потрібно)


    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";

    if (ratingValue > 1) {
      msg = "Thanks! You rated this " + ratingValue + " stars.";
    } else {
      msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }

    responseMessage(msg);
  });
});

function responseMessage(msg) {
  $('.success-box').fadeIn(200);
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
} ////////////////////////////////////   
//кругова діаграма/кругла панель прогресу


$(function () {
  $('.chart').easyPieChart({
    barColor: '#ef1e25',
    trackColor: '#f9f9f9',
    scaleColor: '#dfe0e0',
    scaleLength: 5,
    lineCap: 'round',
    lineWidth: 3,
    trackWidth: undefined,
    size: 73,
    rotate: 0,
    // in degrees
    animate: {
      duration: 1000,
      enabled: true
    },
    easing: function easing(x, t, b, c, d) {
      // easing function
      t = t / (d / 2);

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
  });
});
"use strict";

// 3.Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
var circles = document.querySelectorAll('.circle'); //взяли селектор

var activeLight = 0;

function changeLight() {
  circles[activeLight].classList = 'circle'; //повертає псевдомасив, який містить всі класи елемента

  activeLight++;

  if (activeLight > 2) {
    //перехід знову на друге коло
    activeLight = 0;
  }

  var currentLight = circles[activeLight];
  currentLight.classList.add(currentLight.getAttribute('id')); // прив'язка до класу кольору
}
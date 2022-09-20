"use strict";

// 1.Створити сторінку, що показує нумерований список пісень:
var playList = [{
  author: 'LED ZEPPELIN',
  song: 'STAIRWAY TO HEAVEN'
}, {
  author: 'QUEEN',
  song: 'BOHEMIAN RHAPSODY'
}, {
  author: 'LYNYRD SKYNYRD',
  song: 'FREE BIRD'
}, {
  author: 'DEEP PURPLE',
  song: 'SMOKE ON THE WATER'
}, {
  author: 'JIMI HENDRIX',
  song: 'ALL ALONG THE WATCHTOWER'
}, {
  author: 'AC/DC',
  song: 'BACK IN BLACK'
}, {
  author: 'QUEEN',
  song: 'WE WILL ROCK YOU'
}, {
  author: 'METALLICA',
  song: 'ENTER SANDMAN'
}];
var tegHeader = document.querySelector('.header'); //взяли селектор
// tegHeader.innerHTML = `<h1> ${'PLAYLIST'} </h1>`; //другий варіант

var h1 = document.createElement('h1'); //створив тег

var img = document.createElement('img'); //створив тег

img.setAttribute('src', 'https://previews.123rf.com/images/butenkow/butenkow1711/butenkow171100727/90745568-vector-logo-music.jpg'); // img.setAttribute('class', 'logo'); // додав клас

img.classList.add('logo'); // додав клас

tegHeader.appendChild(h1); // добавив тег в селектор

tegHeader.prepend(img); // добавив тег в селектор

h1.textContent = 'PLAYLIST'; // добавив текстовий контент

var domPlayList = document.getElementById('playlist'); // пройтись по об'єкту

playList.forEach(function (item) {
  var li = document.createElement('li'); //створив li

  var p = document.createElement('p'); //створив р

  var span = document.createElement('span'); //створив span
  // li.setAttribute('class', 'list-group-item'); //додав клас і назву класу

  li.classList.add('list-group-item'); //додав клас і назву класу

  p.textContent = item.author; //додав текст

  span.textContent = item.song; //додав текст

  li.appendChild(p); //додав р в li

  li.appendChild(span); //додав span в li

  domPlayList.appendChild(li); //додав li в ol
}); // 2. Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. 
// На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку 
// модальне вікно не відображається. При кліку на кнопку "Відкрити" 
// з'являється модальне вікно, на кнопку "Закрити" — зникає.

function switchModal() {
  var modal = document.querySelector('.modal');
  modal.classList.toggle('open');
} // function openModal() {
//     const modal = document.querySelector('.modal');
//     modal.classList.add('open');
// }
// function closeModal() {
//     const modal = document.querySelector('.modal');
//     modal.classList.remove('open');
// }
// 3.Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
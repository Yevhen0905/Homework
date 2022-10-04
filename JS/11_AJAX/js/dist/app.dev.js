"use strict";

function pageLoader(page) {
  $.get("pages/".concat(page, ".html"), function (res) {
    // console.log(res);
    $('#main_content').html(res);
  });
} ////////////////// СЛУХАЧИ ПОДІЙ


$('#nav_list a').click(function (e) {
  e.preventDefault();
  $('#nav_list a.active').removeClass('active'); //робимо активною кнопаку перемикання

  $(this).addClass('active'); //робимо активною кнопаку перемикання
  // console.log($(this).attr('href'));   /// отримуємо куди клікаєм

  pageLoader($(this).attr('href'));
});
$(document).on('click', '.page-link', function (e) {
  // коли ми клікаємо на посилання пагінації  вмикаємо функцію  getPage якому передаємо значення хреф нашої посилання
  e.preventDefault(); // для документа так як динамічний елемент

  getPage($(this).attr('href')); // тобто звертаємося до об'єкта document, дивимося клик на аргумент page-link
});
$(document).on('click', '.show-more', function (e) {
  // відстеження клику на відкривання модалки
  e.preventDefault();
  showInfo($(this).attr('data-id')); // відслідковуємо фільм по id взяли з responsiv фільму
});
$(document).on('click', '.close-modal', function (e) {
  //закривання модалки
  e.preventDefault();
  closeModal();
}); //////////////////////////////////// 

pageLoader('search');
var URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=32fdeb21';
var PAGE = 1; // перша сторінка пагінатора

function createMovieList(list) {
  // console.log(list);   //дивимося, що буде отримувати функція
  var html = '';
  list.forEach(function (el) {
    // пройдемося по кожному елементу масива і вивести картку 
    // console.log(el);
    //добавляємо картки з фільмами
    html += "<div class=\"col\">\n                    <div class=\"card shadow-sm\">\n                      <img class=\"w-100\" src=\"".concat(el.Poster && el.Poster != 'N/A' ? el.Poster : 'https://via.placeholder.com/400x500', "\" alt=\"\">              \n                      <div class=\"card-body\">\n                      ").concat(el.Title ? '<p class="card-text">' + el.Title + '</p>' : '', "                       \n                        <div class=\"d-flex justify-content-between align-items-center\">\n                          <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-sm btn-outline-secondary show-more\" data-id=").concat(el.imdbID, ">View</button>\n                          </div>\n                          <small class=\"text-muted\">").concat(el.Year, "</small>\n                        </div>\n                      </div>\n                    </div>\n                  </div>");
  }); //  console.log(html);  //дивимося на виході html

  $('#cards').html(html); // підставляємо html на сторінку
}

function showError(err) {
  $('#cards').html("<h2 class='error'>".concat(err, "</h2>")); // виводимо помилку функцією
}

function showPagination() {
  $('.pagination').css('display', 'flex'); // метод show дає дісплей блок, треба на флекс, Добавляємо пагинацію якщо totalResults > 0
}

function hidePagination() {
  $('.pagination').css('display', 'flex'); // приховати pagination
}

function managePagination(results) {
  // напомнювати results_count h3
  var totalPage = Math.ceil(results / 10); // рахуємо кількість сторінок

  $('#results_count').text("Results ".concat(PAGE * 10 - 9, " - ").concat(PAGE * 10, ", from ").concat(results, " results.")); // розписуємо сторінки 1-10

  $('.last-page-link').text(totalPage).attr('href', totalPage); // ставим останню сторінку + замінили в ашке хреф на кількість сторінок 418 
}

function findAFilm() {
  //пошук фильму // бере значення поля search, відсилає запит, будує нам пагінацію, показує помилки
  var query = $('#search').val(); // console.log(query);                  /// отримуємо ведене в инпут

  $.ajax(URL + "&s=".concat(query, "&page=").concat(PAGE)) /// url + s параметр назви = вводим назву фільму + параметр сторніки який дорівнює по дефолту 1
  .done(function (res) {
    // console.log(res);             //пошук по назві, отпримали список фільмів в масиві, по замовчуванню сервер не віддає нм всі результати//приходять результати для сторінки номер один, щоб отримати для другої сторінки треба добавити параметр "page"
    if (res.Search && res.totalResults > 0) {
      //полу Search чи є фільм(щоб не було помилки) і  якщо має довжину+ перевіряємо чи є totalResults
      createMovieList(res.Search);

      if (res.totalResults > 10) {
        // якщо більше 10 елементів то додаємо пагінацию, якщо 10 і менше вона не потрібна
        showPagination();
        managePagination(res.totalResults); /// запускаємо функцію виводу кількості  totalResults  
      } else {
        hidePagination();
      }
    } else {
      showError(res.Error);
    }
  }).fail(function (err) {
    // console.log(err);   
    showError(err.Error); //  запуск функції помилки 
  });
}

function getPage(page) {
  // функція для переключання між сторінками, шукаємо параметр сторінки
  if (page) {
    // якщо у нас є сторінка то ми змінюємо нашу локальне значення PAGE у запускаємо пошук фільмів буде брати із оновленної сторінки
    if (page === 'prev') {
      // якщо клікаємо prev то -1 назад
      PAGE = PAGE === 1 ? 1 : PAGE - 1; // перевірка щоб не було -1 сторінка

      findAFilm();
    } else if (page === 'next') {
      // якщо клікаємо next то +1 назад
      PAGE = PAGE + 1;
      findAFilm();
    } else {
      PAGE = page;
      findAFilm();
    }
  }
}

function showModal(film) {
  // console.log(film);            // перевірка відкриття функції
  var html = "<div class=\"modal-header\">                                     \n                <h5 class=\"modal-title\">".concat(film.Title, "</h5>\n              </div>\n              <div class=\"modal-body\">\n                <p>").concat(film.Plot, "</p>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary close-modal\">Close</button>\n              </div>");
  $('.modal-content').html(html); //   добавляємо все в html

  $('.modal').addClass('open'); // відкриття модалки по кліку
}

function closeModal() {
  $('.modal').removeClass('open');
}

function showInfo(id) {
  // console.log(id);                 // ловимо id
  $.ajax(URL + "&i=".concat(id)) //запит по параметру "i" з нашої APi щоб отримати тільки один id  нашого фільму для відкриття модалки     
  .done(function (res) {
    // console.log(res); 
    showModal(res);
  }).fail(function (err) {
    showError(err.Error);
  });
} /// є проблема,під час запиту не хоче виводити в модалку інфу, показує 
//{Response: "False", Error: "Incorrect IMDb ID."}
// Error
// : 
// "Incorrect IMDb ID."
// Response
// : 
// "False"
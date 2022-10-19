
function pageLoader (page) {
  $.get(`pages/${page}.html`, res => {
    // console.log(res);
       $('#main_content').html(res);
       getLocalFilmName();                                // запускаємо тут функцію для збереження в инпути назви фільму
  })
}

////////////////// СЛУХАЧИ ПОДІЙ
$('#nav_list a').click(function(e) {
    e.preventDefault();
    $('#nav_list a.active').removeClass('active'); //робимо активною кнопаку перемикання
    $(this).addClass('active'); //робимо активною кнопаку перемикання
    // console.log($(this).attr('href'));   /// отримуємо куди клікаєм
    pageLoader ($(this).attr('href'));
}); 


$(document).on('click', '.page-link', function(e) {  // коли ми клікаємо на посилання пагінації  вмикаємо функцію  getPage якому передаємо значення хреф нашої посилання
  e.preventDefault();
                                  // для документа так як динамічний елемент
getPage($(this).attr('href'));                       // тобто звертаємося до об'єкта document, дивимося клик на аргумент page-link
});  


$(document).on('click', '.show-more', function(e) {  // відстеження клику на відкривання модалки
  e.preventDefault();     

  showInfo($(this).attr('data-id'));      // відслідковуємо фільм по id взяли з responsiv фільму
});        

$(document).on('click', '.close-modal', function(e) {  //закривання модалки
  e.preventDefault();     

    closeModal();     
});
//////////////////////////////////// 
pageLoader ('search'); 

const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=32fdeb21';

let PAGE = 1;  // перша сторінка пагінатора

function createMovieList(list) {
    console.log(list);   //дивимося, що буде отримувати функція
    let html = ''; 
    list.forEach(el => {                       // пройдемося по кожному елементу масива і вивести картку 
        // console.log(el);
                                            //добавляємо картки з фільмами
        html += `<div class="col">
                    <div class="card shadow-sm">
                      <img class="w-100" src="${el.Poster && el.Poster != 'N/A' ? el.Poster : 'https://via.placeholder.com/400x500'}" alt="">              
                      <div class="card-body">
                      ${el.Title ? '<p class="card-text">' + el.Title + '</p>': ''}                       
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary show-more" data-id=${el.imdbID}>View</button>
                          </div>
                          <small class="text-muted">${el.Year}</small>
                        </div>
                      </div>
                    </div>
                  </div>`;
     }); 
    //  console.log(html);  //дивимося на виході html
     $('#cards').html(html); // підставляємо html на сторінку
}

function showError (err) {
    $('#cards').html(`<h2 class='error'>${err}</h2>`)     // виводимо помилку функцією
}

function showPagination() {
  $('.pagination').css('display', 'flex');   // метод show дає дісплей блок, треба на флекс, Добавляємо пагинацію якщо totalResults > 0
}

function hidePagination() {
  $('.pagination').css('display', 'flex');   // приховати pagination
}

function managePagination(results) {          // напомнювати results_count h3
   const totalPage = Math.ceil(results / 10);       // рахуємо кількість сторінок
   $('#results_count').text(`Results ${PAGE  * 10 - 9} - ${PAGE * 10}, from ${results} results.`); // розписуємо сторінки 1-10
   $('.last-page-link').text(totalPage).attr('href', totalPage);    // ставим останню сторінку + замінили в ашке хреф на кількість сторінок 418 
}

//////////////////////////// отримання в импут автоматично назву фільму для пошуку
function setLocalFilmName(filmName) {                     //функція запросу з localStorage
    localStorage.setItem('film', filmName);                    // яка назва і що буде зберігатися
}

function getLocalFilmName() {                            // повертає з localStorage останній пошук
   const film = localStorage.getItem('film');
  //  console.log(film);
   if(film) {
    $('#search').val(film);
    findAFilm()
   }
}
/////////////////////////////////////

 
function findAFilm() {                       //пошук фильму // бере значення поля search, відсилає запит, будує нам пагінацію, показує помилки
    const query = $('#search').val();   
    // console.log(query);                  /// отримуємо ведене в инпут

    query && setLocalFilmName(query);
    // if(query) {
    //   setLocalFilmName(query)
    // }                                                  // викликаємо функцію

    $.ajax(URL + `&s=${query}&page=${PAGE}`)         /// url + s параметр назви = вводим назву фільму + параметр сторніки який дорівнює по дефолту 1
        .done(res => {         
            console.log(res);             //пошук по назві, отпримали список фільмів в масиві, по замовчуванню сервер не віддає нм всі результати//приходять результати для сторінки номер один, щоб отримати для другої сторінки треба добавити параметр "page"
            if(res.Search && res.totalResults > 0) {                   //полу Search чи є фільм(щоб не було помилки) і  якщо має довжину+ перевіряємо чи є totalResults
                createMovieList(res.Search); 
  
                if(res.totalResults > 10) {  // якщо більше 10 елементів то додаємо пагінацию, якщо 10 і менше вона не потрібна
                  showPagination();  
                  managePagination(res.totalResults);    /// запускаємо функцію виводу кількості  totalResults  
                } else {
                  hidePagination();
                }               
              } else {
                showError(res.Error);   
            }                 
        })
        .fail(err => {               
            // console.log(err);   
            showError(err.Error);       //  запуск функції помилки 
        });    
}


function getPage(page) {              // функція для переключання між сторінками, шукаємо параметр сторінки
  if(page) {                        // якщо у нас є сторінка то ми змінюємо нашу локальне значення PAGE у запускаємо пошук фільмів буде брати із оновленної сторінки
     if(page === 'prev') {             // якщо клікаємо prev то -1 назад
      PAGE = PAGE === 1 ? 1 : PAGE - 1;   // перевірка щоб не було -1 сторінка
      findAFilm()
     } else if(page === 'next') {     // якщо клікаємо next то +1 назад
      PAGE = PAGE + 1;
      findAFilm()
     } else {
      PAGE = page;
      findAFilm()
     }
  }
}

function showModal(film) {       
  // console.log(film);            // перевірка відкриття функції
  let html = `<div class="modal-header">                                     
                <h5 class="modal-title">${film.Title}</h5>
              </div>
              <div class="modal-body">
                <p>${film.Plot}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary close-modal">Close</button>
              </div>`;
       $('.modal-content').html(html);          //   добавляємо все в html
       $('.modal').addClass('open');           // відкриття модалки по кліку
} 

function closeModal() {
  $('.modal').removeClass('open'); 
}

function showInfo(id) {    
  // console.log(id);                 // ловимо id

  $.ajax(URL + `&i=${id}`)     //запит по параметру "i" з нашої APi щоб отримати тільки один id  нашого фільму для відкриття модалки     
        .done(res => {         
          // console.log(res); 
          showModal(res);  
        })
        .fail(err => {               
            showError(err.Error);      
        });
}     

//  є проблема,під час запиту не хоче виводити в модалку інфу, показує 
// {Response: "False", Error: "Incorrect IMDb ID."}
// Error
// : 
// "Incorrect IMDb ID."
// Response
// : 
// "False"

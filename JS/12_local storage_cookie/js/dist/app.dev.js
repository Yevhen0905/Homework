"use strict";

//  https:api.openweathermap.org/data/2.5/weather?lat=49.422983&lon=26.987133&lang=ua&appid=231749eaa327f7777cac2d7ad9c5586e
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
function createWeather(data) {
  console.log(data); //дивимося, що буде отримувати функція
  // let html = ''; 
  // item.forEach(el => {                     
  //     console.log(el);

  var html = "<div class=\"card-body p-4\">      \n                        <div class=\"d-flex\">\n                              <h6 class=\"flex-grow-1\">".concat(data.name, "</h6>\n                              <h6>15:07</h6>\n                        </div>      \n                        <div class=\"d-flex flex-column text-center mt-5 mb-4\">\n                              <h6 class=\"display-4 mb-0 font-weight-bold\" style=\"color: #1C2331;\"> 13\xB0C </h6>\n                              <span class=\"small\" style=\"color: #868B94\">Stormy</span>\n                        </div>     \n                        <div class=\"d-flex align-items-center\">\n                              <div class=\"flex-grow-1\" style=\"font-size: 1rem;\">\n                              <div> <span class=\"ms-1\"> 40 km/h </span></div>\n                              <div> <span class=\"ms-1\"> 84% </span></div>\n                              <div> <span class=\"ms-1\"> 0.2h </span></div>\n                              </div>\n                              <div>\n                              <img src=\"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp\" width=\"100px\">\n                              </div>\n                        </div>     \n                  </div>"); //  }); 
  // //  console.log(html);  //дивимося на виході html

  $('#cards').html(html); // підставляємо html на сторінку
}

var URL = 'https://api.openweathermap.org/data/2.5/weather?lang=ua&appid=231749eaa327f7777cac2d7ad9c5586e';

function findWeather() {
  var query = $('#search').val();
  console.log(query);
  $.ajax(URL + "&q=".concat(query)).done(function (res) {
    // console.log(res);  
    createWeather(res);
  }).fail(function (err) {
    // console.log(err);   
    showError(err.Error);
  });
} // function findWeather() {
//       const query = document.getElementById('search').value;
//       console.log(query);
//       axios(URL + `&q=${query}`)        
//         .then(res => {         
//             console.log(res);  
//             // createWeather([res.data]) 
//         })
//         .catch(err => {               
//             // console.log(err);   
//             // showError(err.Error);   
//         });    
// }
// axios('https://api.openweathermap.org/data/2.5/weather?q=London&lang=ua&appid=231749eaa327f7777cac2d7ad9c5586e')
//       .then(res =>  console.log(res))
//       .catch(err => {               
//             console.log(err);
//       })
// .then(res =>  res.json())
// .then(data => console.log(data))
// .catch(err => {               
//       console.log(err);
// });
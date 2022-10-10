

$(function() {
  $('.fade').slick({
      dots: true, 
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      prevArrow: false,
      nextArrow: false
  });
})


$(function() {
    $('.autoplay').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev slick_arrow"><span class="slick_item_prev"></span></button>',
        nextArrow: '<button type="button" class="slick-next slick_arrow"><span class="slick_item_next"></span></button>',       
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        responsive: [
            {
              breakpoint: 1024, //екран менше 1024
              settings: {
                slidesToShow: 3,                
                // infinite: true, по замовчуванню
                // dots: true  точки поки не треба
               }
            },
            {
                breakpoint: 768, //екран менше 768
                settings: {
                  slidesToShow: 2,
                  dots: true,
                  arrows: true
                  // infinite: true, по замовчуванню
                  // dots: true  точки поки не треба
               }
            },
            {
                breakpoint: 568, //екран менше 568
                settings: {
                  slidesToShow: 1,
                  dots: true
                  // infinite: true, по замовчуванню
                }
            }
        ]    
    });
})


//leaflet map
//https://tile.openstreetmap.org/{z}/{x}/{y}.png

const map = L.map('map').setView([47.829695196760404, 35.08683254049166], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



L.marker([47.85741153458429, 35.07490444798924]).addTo(map)
    .bindPopup('<h2>Запорозька Січ історико-культурний комплекс</h2> <p>о.Хортиця, вул. Старого редуту 10, Запоріжжя, Запорізька область, 69000</p> <img src="https://hortica.zp.ua/images/sich.jpg">')
    .openPopup();

L.marker([47.81435838449306, 35.11130743629744]).addTo(map)
    .bindPopup('<h2>Націонáльний заповíдник «Хóртиця»</h2><p>Заснований у 1965 році. До його складу входить сам острів Хортиця і прилеглі острови та скелі: Байда, Дубовий, Ростьобин, Три Стоги, Середня, Близнюки, урочище</p><img src="http://itinery.com.ua/img/objects_content/baida.jpg"> ')
    .openPopup();


L.marker([47.799693589676785, 35.13418233831213]).addTo(map)
    .bindPopup('<h2>Кінний театр "Запорозькі козаки"</h2><p>Кінний театр «Запорозькі козаки» пропонує вашій увазі програму фольклорно-етнографічного кінного театру, який розпочав свою діяльність на початку 90-х років, та має великий досвід прийому мешканців та гостей міста. Театралізована вистава проходитиме на імпровізованій сцені, програма включає - трюки на конях, роботу арапником (батогом), захоплюючі козацькі ігри та розваги. Театр проводить старовинний ритуал «Посвячення в козаки» з видачі почесної грамоти на память.</p><img src="https://s.061.ua/section/afisha_event/upload/pers/3/img/afisha/000/000/026/filedownload_5ad7076e0a07b.jpg">')
    .openPopup();
   


// scroll up



   
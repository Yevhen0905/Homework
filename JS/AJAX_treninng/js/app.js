/// XMLHttpRequest

//СКЛАДНИЙ СПОСІБ

// let result;
// const xhr = new XMLHttpRequest();
// xhr.open('get', 'data/data.json'); // запуск
// // xhr.send(); //відкрити
// xhr.onreadystatechange = () => {
//     console.log(xhr);
//     // In local files, status is 0 upon success in Mozilla Firefox
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       const status = xhr.status;
//       if(status === 404) {         // обробка помилки
//         alert(xhr.statusText);
//       }
//       if (status === 0 || (status >= 200 && status < 400)) {
//         // The request has been completed successfully
//         // console.log(JSONparse(xhr.responseText)); // перетворити в об'єкт
//         result = JSON.parse(xhr.responseText);
//         createProductList(result);  //запускаємо функцію раніше, тому що працює асинхроно(запит йде а функція уже виконалася)
//       } else {
//         // Oh no! There has been an error with the request!
//       }
//     }
//   };
//   xhr.send();

//// ЗАМІСТЬ ВЕРХНЬОЇ КОНСТРУКЦІЇ МЕТОД FETCH, але не можемо нормально коректно опрацювати помилки

// fetch('data/data.json')
//      .then(res => {             //аргумент response
//         // console.log(res);
//         return res.json();    //щоб отримати дані, перевести відповідь сервера у джейсон
//      })
//      .then(res => {         //ще раз викликати 
//         console.log(res);
//         createProductList(res);
//      })


/////міняємо fetch на axios

            // axios('data/data.json') 
            //     .then(res => {         //ще раз викликати 
            //         console.log(res);
            //         createProductList(res.data);   //треба передавати data
            //     })
            //     .catch(err => {                 //спрацьовує коли помилка, ловить помилки
            //         console.log(err);
            //     })


            // function createProductList(list) {
            //     // console.log(list);

            //     list.forEach(el => {                  //проходимось по отриманому масиву
            //         const ul = document.getElementById('list');
            //         const li = document.createElement('li'); 
            //         li.textContent = el.name;

            //         ul.append(li); 

            //     });
            // }

            

// console.log(xhr);



///////////////////////////////////////////////////////////////////////////////////////////////////////////// axios
const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=32fdeb21';

// axios(URL + '&t=Star') 
//         .then(res => {         
//             // console.log(res);
//             createMovieList([res.data]);  
//         })
//         .catch(err => {               
//             console.log(err);
//         })

// let movieType = 'movie';


function createMovieList(list) {
   // console.log(list);

   list.forEach(el => {                 
    const ul = document.getElementById('list');
    const li = document.createElement('li'); 
    const img = document.createElement('img');
    img.setAttribute('src', el.Poster);

    li.textContent = el.Title;

    ul.append(img);
    ul.append(li); 
   });
}             

function findAFilm() {
    const query = document.getElementById('search').value;
    console.log(query);
    axios(URL + `&t=${query}&type=${movieType}`) 
        .then(res => {         
            // console.log(res);
            createMovieList([res.data]);  
        })
        .catch(err => {               
            console.log(err);
        })    
}

function changeType(e) {
    // console.log(e.target.value);
    movieType = e.target.value;
} 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// jQuery

// $(function(){
//     $.ajax('data/data.json')
//     .done(res => {
//       console.log(res);;
//     })
//     .fail(err => {
//       console.log(err);;
//     });
//     // $.get('data/data.json', res => console.log(res)) // швидко отримати дані, робиться запит в один рядок
// });
//  https:api.openweathermap.org/data/2.5/weather?lat=49.422983&lon=26.987133&lang=ua&appid=231749eaa327f7777cac2d7ad9c5586e
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=49.422983&lon=26.987133&lang=ua&appid=231749eaa327f7777cac2d7ad9c5586e'

function findWeather() {
      const query = $('#search').val();
      console.log(query);

      $.ajax(URL + `&q=${query}`)        
        .done(res => {         
            console.log(res);             
        })
        .fail(err => {               
            // console.log(err);   
            showError(err.Error);   
        });    
}




// axios('https://api.openweathermap.org/data/2.5/weather?lat=49.422983&lon=26.987133&lang=ua&appid=231749eaa327f7777cac2d7ad9c5586e')
//       .then(res =>  console.log(res))
//       .catch(err => {               
//             console.log(err);
//       });

      // .then(res =>  res.json())
      // .then(data => console.log(data))
      // .catch(err => {               
      //       console.log(err);
      // });


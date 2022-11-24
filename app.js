const inputEl = document.getElementById('input');
const Setbtn = document.getElementById('set');
const footerEl = document.getElementById('footerEl');
let weatherImg = document.getElementById('weather-img');
let content = document.querySelector('.content');
let celcius = document.getElementById('set');
const API_KEY = "f8fc1b556bd8876e9627e335543cf99d";
let currentYear = new Date().getFullYear();
footerEl.innerText = `Copywrite © ${currentYear}`;


Setbtn.addEventListener('click', function(event){
    event.preventDefault();
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&appid=${API_KEY}&units=metric`;
    
    fetch(Url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.wind);

        let weatherSpec;
        
        if(data.weather[0].main === 'Rain'){
            weatherSpec = '/icons/rainy.png';
        }

        else if(data.weather[0].main === 'Clouds'){
            weatherSpec = '/icons/cloudy.png';
        }

        else if(data.weather[0].main === 'Clear'){
            weatherSpec = '/icons/clear-sky.png';
        }

        else if(data.weather[0].main === 'Smoke'){
            weatherSpec = '/icons/fog.png';
        }
       

       console.log(data.weather[0].main);
      

        let weatherChange = 
        ` 
            <div class="image">
                <img src="${weatherSpec}" alt="rainy day" id="weather-img">
            </div>

            <div class="digits">
                <h2 id="celcius">${data.wind.deg}°</h2>
                <h3>${data.weather[0].description}</h3>
                <p>${data.name}</p>
            </div>
   `;

    content.innerHTML = weatherChange;
    
    }).catch((error) => {
        alert("Not a country")
    })
    
})

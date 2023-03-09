const myKeyApi = "7b5e1f2e694d690971d8b15e1944d677";
const weatherApi =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=7b5e1f2e694d690971d8b15e1944d677";
const iconUrl = `http://openweathermap.org/img/wn/10d@4x.png`;
const formElement = document.querySelector("form");
const inputElement = document.querySelector("#city_input");
const SearchElement = document.querySelector("#submit");
const container = document.querySelector(".card");
const iconElement = document.querySelector("#weather_img");
const tempElement = document.querySelector("#temp");
const cityNameElement = document.querySelector("#city");
const dateElement = document.querySelector("#date");
const typeWeather = document.querySelector("#cloudy");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputElement.value == "") {
    inputElement.value = "";
  } else {
    fetchData(inputElement.value).then((res) => {
      // console.log(res.name)
      createElement(res);
      // console.log(res.main.temp)
      // console.log(res.weather[0]['main'])
      // console.log(res.weather[0]["icon"])
      // cityNameElement.innerHTML = res.name;
      // typeWeather.innerHTML = (res.weather[0]['main'])
      // tempElement.innerHTML = Math.floor(res.main.temp -272)
      // iconElement.setAttribute("src" , `http://openweathermap.org/img/wn/${res.weather[0]["icon"]}.png`)
    });
    inputElement.value = "";
  }
});

let newDate = new Date(),
day = newDate.getDate(),
month = newDate.getMonth(),
monthsArray = []
setInterval(() => {

   monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  dateElement.innerHTML = `${day}st ${monthsArray[month]}`;
  // console.log(day)
  // console.log(month)
}, 500);

async function fetchData(city) {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b5e1f2e694d690971d8b15e1944d677`
  );
  return result.json();
}

function createElement(obj) {


  let name = obj.name;
  let temp = obj.main.temp;
  let main = obj.weather[0]["main"];
  let icon = obj.weather[0]["icon"];

  container.innerHTML = `
    <div class="card">
    <div class="background">
      <img id="weather_img" src="http://openweathermap.org/img/wn/${icon}.png" alt="" />
    </div>
    <div class="weatherInfo">
      <div id="temp"><span id="deg">${Math.floor(
        temp - 272
      )}</span><span>&deg;</span></div>
      <div class="description">
        <div id="status">${main}</div>
        <div id="city">
          ${name}
        </div>
      </div>
      <div id="date">${day}st ${monthsArray[month]}</div>
    </div>
  </div>
   `;
}

// const paragraph = document.querySelector(".demo");
// function height (){
//     console.log("let's do this")
//     const textArr= paragraph.textContent.split(" ");
//     const modifiedTextArr = textArr.map(word=>{
//         if(word.length>8){
//             return `<span class=highlight>${word}</span>`
//         }
//             return word
//     })
//     const htmlText = modifiedTextArr.join(" ");
//    paragraph.innerHTML = htmlText;

//     // paragraph.innerHTML = paragraph.textContent.split(" ")
//     // .map(word=>word.length>8 ? `<span class=highlight>${word}</span>` : word )
//     // .join(" ");
// }

// height()

// const apiKey = "ENTER YOUR API KEY";

// const main = document.getElementById('main');
// const form = document.getElementById('form');
// const search = document.getElementById('search');

// const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// async function getWeatherByLocation(city){

//          const resp = await fetch(url(city), {
//              origin: "cros" });
//          const respData = await resp.json();

//            addWeatherToPage(respData);

//      }

//       function addWeatherToPage(data){
//           const temp = Ktoc(data.main.temp);

//           const weather = document.createElement('div')
//           weather.classList.add('weather');

//           weather.innerHTML = `
//           <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
//           <small>${data.weather[0].main}</small>

//           `;

//         //   cleanup
//           main.innerHTML= "";
//            main.appendChild(weather);
//       };

//      function Ktoc(K){
//          return Math.floor(K - 273.15);
//      }

//      form.addEventListener('submit',(e) =>{
//         e.preventDefault();

//         const city = search.value;

//         if(city){
//             getWeatherByLocation(city)
//         }

//      });

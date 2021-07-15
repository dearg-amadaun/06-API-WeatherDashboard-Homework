//Need to figure out UV Selector

//Todays Weather and city searech function
var weather = {
    apiKey: "1a94e70d127630c40b1a2420ca78fce2",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } =data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} =data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "" + name + " (" + currentDate + ")";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = "Temperature: " + temp + " °F";
        document.querySelector(".wind").innerText = "Wind: " + speed + " MPH";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        //document.querySelector(".uvIndex").innerText = "UV Index: " + +; 
    },
    search: function () {
        this.fetchWeather(document.querySelector("input").value);
    },

 };

 //Five day forecast for city
 //Can't combine forecast with daily weather 
 //Not enough to just duplicate the weatherfetch for forecast
 //Need to parse it for each day 


 //  var foreCast = {
//     apiKey: "1a94e70d127630c40b1a2420ca78fce2",
//     fetchForecast: function (city) {
//         fetch(
//             "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
//         )
//         .then((response) => response.json())
//         .then((data) => this.displayForecast(data));
//     },
//     displayForecast: function(data) {
//         const { dt_txt } = data.list;
//         const { icon } = data.weather[0];
//         const { temp, humidity } =data.main;
//         const { speed } = data.wind;
//         console.log(dt_txt, icon, temp, humidity, speed)
//         document.querySelector("card-title").innerText = dt_txt
//         document.querySelector(".card-temp").innerText = "Temp: " + temp + " °F";
//         document.querySelector(".card-wind").innerText = "Wind: " + speed + " MPH";
//         document.querySelector(".card-humidity").innerText = "Humidity: " + humidity + "%";
//     },
//     search: function () {
//         this.fetchforecast(document.querySelector("input").value);
//     },    

// }

document.querySelector("button").addEventListener("click", function () {
weather.search();
});
 





//Current time and date
var currentDate = moment().format('MMMM Do YYYY');
console.log(currentDate);

//Date and time for 5 day forecast
//Date +1, +2, +3, etc? or does weatherapp cover that?
//dt and dt_txt?


//Need to figure out local storage for previuous searches


 
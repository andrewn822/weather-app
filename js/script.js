var apiKey = '9cfe7036b90b3a13af1a88f6bf534b32'
var yelpKey = 'UtgYP3oNouVCO68pYnqcffLbhwiRsRDqK0BMJPKYrhzLexA0rNI8NHIK6E6TiyiOmkMtdUvyH5FChLj3mcXZMfR8t1dSCJZZqUeXWJ3M34Y_m9cNqxfmMnvZAEtYY3Yx'
var corse = 'https://cors-anywhere.herokuapp.com/'


var citySearch = document.querySelector("#city-search-term");
var displayContainer = document.querySelector("#forecast-container");
var realDisplay = document.querySelector(".forecast.display.container")
var formBox = document.querySelector("#weather-form");
var cityName = document.querySelector("#city-name");


var submitFormHandler = function(event) {
    event.preventDefault();

    var citySearch = cityName.value;

    if (citySearch) {
        getForecast(citySearch)
        displayContainer.textContent = '';
        cityName.textContent = '';
    } else {
        alert("Please enter a Valid City");
    }

}

var getForecast = function (city) { 

    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()        
        .then(function (data) {
            console.log(data);
            console.log(data.list[0])
        })
            }
        })


}


var displayForest = function(forecast, cityName) {
    citySearch.textContent = cityName;
    var weekDay = moment().format('dddd')
    var day1set = moment().add(1, 'days').format('dddd')
    var day2set = moment().add(2, 'days').format('dddd')
    var day3set = moment().add(3, 'days').format('dddd')
    var day4set = moment().add(4, 'days').format('dddd')
    var day5set = moment().add(5, 'days').format('dddd')



    for (var i = 0; i < forecast.length; i++) {
        var cityEl = document.createElement('li');
        cityEl.classList.add("current-forecast-display")
        realDisplay.classList.add("p-3");
        var days = document.createElement('h1');
        var temperture = document.createElement('')


    } 
    

}

formBox.addEventListener('submit', submitFormHandler);


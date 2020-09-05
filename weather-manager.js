function loadWeather() {
    let data = JSON.parse(window.localStorage.weather);
    let temp = data.current.temp;
    let humid = data.current.humidity;
    let feels_like = data.current.feels_like;
    let uvi = data.current.uvi;
    let desc = data.current.weather[0].description;

    document.getElementById("weatherTemp").innerHTML = `${temp}&#176`;
    document.getElementById("weatherFeels").innerHTML = `${feels_like}&#176`;
    document.getElementById("weatherHumid").innerHTML = `${humid}%`;
    document.getElementById("weatherUVI").innerHTML = `${uvi}`;

    let icon = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`
    let icon_el = document.getElementById("weatherIcon")
    icon_el.src = icon;

    for(var i = 1; i <= 3; i++){
        document.getElementById(`day${i}icon`).src
        document.getElementById(`day${i}high`).innerHTML = `${data.daily[i].temp.max}&#176;`
        document.getElementById(`day${i}low`).innerHTML = `${data.daily[i].temp.min}&#176;`
        document.getElementById(`day${i}pop`).innerHTML = `${data.daily[i].pop * 100}%`
        document.getElementById(`day${i}desc`).innerHTML = data.daily[i].weather.reduce( (acc, el) => { 
            if(acc.length == 0) { return el.description }
            else { return acc + " then " + el.description}
        }, "")
    }
}
if(!window.localStorage.weather){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&APPID=${OPEN_WEATHER_API_KEY}&units=${WEATHER_UNITS}&exclude=hourly,minutely`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            window.localStorage.weather = JSON.stringify(data); 
        });
}            
loadWeather()
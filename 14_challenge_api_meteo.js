const APIKEY = '4e75a3bce44e5a61c0f58cc8424fee51';
let apiCall = function(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}&lang=fr`;

    fetch(url).then(response => response.json()).then(data => {
            console.log(data);
            document.querySelector('#name').innerHTML = data.name;
            document.querySelector('#desc').innerHTML = data.weather[0].description;
            // document.querySelector('#icon').innerHTML = data.weather[0].icon;
            document.querySelector('#temp').innerHTML = data.main.temp + " " + "°" + " " + "<i class ='fas fa-thermometer-half'></i>";
            // document.querySelector('#temp_min').innerHTML = data.main.temp_min;
            // document.querySelector('#temp_max').innerHTML = data.main.temp_max;
            document.querySelector('#humidity').innerHTML = data.main.humidity + " " + "%" + " " + "<i class ='fas fa-tint'></i>";
            document.querySelector('#wind').innerHTML = data.wind.speed + " " + "km/h" + " " + "<i class ='fas fa-wind'></i>";
        })
        .catch(err => console.log("Tu t'es planté  + err"));
};


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let ville = document.querySelector('#cityName').value;

    apiCall(ville);
});
apiCall('gujan-mestras')
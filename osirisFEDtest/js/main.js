$(document).ready(function () {

    var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=7ba78c0c7f8103d0c7cb370edccebc9e';

    $.ajax({
      url: apiCall,
      dataType: "jsonp",

      success: function (weatherData) {
        var cityName = weatherData.name;
        var country = weatherData.sys.country;
        var tempreture = weatherData.main.temp;
        var description = weatherData.weather[0].description;
        var celcius = '&deg;C';

        console.log(cityName +" "+ country +" "+ tempreture +" "+ description);

        $('.weather .card-title').append(cityName + "," + country);
        $('.weather p').append(description);
        $('.weather .celcius').append(tempreture +""+ celcius);
    }

    });
});

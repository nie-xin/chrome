var WEATHER = (function() {
    var city = null,
        country = null,
        url = null;

    var init = function() {
        city = localStorage.city ? localStorage.city : 'paris';
        country = localStorage.country ? localStorage.country : 'france';
        url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city + ',' + country;
        document.getElementById('location').innerText = city + ', ' + country;
    };

    var httpRequest = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                callback(xhr.responseText);
            }
        }
        xhr.send();
    };

    var showWeather = function(result) {
        result = JSON.parse(result);
        var list = result.list;
        var table = '<table><tr><th>Date</th><th>Weather</th><th>Min</th><th>Max</th></tr>';

        list.forEach(function(item) {
            //console.log(item);
            var d = new Date(item.dt * 1000);
            table += '<tr>';
            table += '<td>' + d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate() + '</td>';
            table += '<td>' + item.weather[0].description + '</td>';
            table += '<td>' + Math.round(item.temp.min - 273.15) + ' celsius</td>';
            table += '<td>' + Math.round(item.temp.max - 273.15) + ' celsius</td>';
            //console.log(table);
        });
        table += '</table>';
        document.getElementById('weather').innerHTML += table;
    };

    return {
        run: function() {
            init();
            httpRequest(url, showWeather);
        }
    };
})();

WEATHER.run();

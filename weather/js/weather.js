function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showWeather(result) {
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
    document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city ? localStorage.city : 'paris';
var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city +',france';
httpRequest(url, showWeather);

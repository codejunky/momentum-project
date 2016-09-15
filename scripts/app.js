function getUserLocation() {
  if ("geolocation" in navigator) {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve([position.coords.latitude, position.coords.longitude]);
      });
    });
  } else {
    console.log("Sorry your browser doesn't support geolocation");
  }
}


function returnUserLocationOnSuccess(coords) {
  return coords;
}

function weatherInfoLoc() {
  getUserLocation()
    .then(returnUserLocationOnSuccess)
    .then(getWeatherInfo);
}

function getWeatherInfo(coords) {
  var api_key = "d121f5c96a69089c551e68ce0d7ea3a8";
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords[0] +
       '&lon=' + coords[1] + '&units=metric&appid=' + api_key;

  var info = {};

  $.getJSON(url, function(data) {
    info.name = data.name;
    info.temp = data.main.temp;
    info.icon = data.weather[0].icon;
  });

  return info;
}

/**********************************************
* get user's location if geolocation is enabled
***********************************************/
function getUserLocation() {
  if ("geolocation" in navigator) {
    //A Promise represents a value which may be available now, or in the future, or never.
    //It is needed here, as without it "coords" is returned before getCurrentPosition can execute the callback, and we get an empty array instead of the user's actual location.
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) { //if this is successful, the value is passed down to a .then function
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
    .then(returnUserLocationOnSuccess) //coords are returned
    .then(getWeatherInfo); //api call is made
}

/********************************************************************
* api call to get the name of location, temperature, and weather icon
*********************************************************************/
function getWeatherInfo(coords) {
  var api_key = "d121f5c96a69089c551e68ce0d7ea3a8";
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords[0] +
       '&lon=' + coords[1] + '&units=metric&appid=' + api_key;

  var info = {};

  $.getJSON(url, function(data) {
    info.name = data.name;  //location 
    info.temp = data.main.temp; //temperature
    info.icon = data.weather[0].icon; //weather icon
  });

  return info;
}

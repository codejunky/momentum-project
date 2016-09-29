/**********************************************
* Try and get the user's location.
* If geoloaction is supported return a Promise
* that either resolves to the user's cooridantes
* or sends back an error.
***********************************************/

function getUserLocation() {
  if ("geolocation" in navigator) {
    //A Promise represents a value which may be available now, or in the future, or never.
    //It is needed here, as without it "coords" is returned before getCurrentPosition can execute the callback, and we get an empty array instead of the user's actual location.
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) { //if this is successful, the value is passed down to a .then function
        resolve([position.coords.latitude, position.coords.longitude]);
      }, function(err) {
        reject({"error": "Location unkown"});
      });
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
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

/********************************************************************
* If the user allows location tracking get weather info for
* his location and display it on the Momentum index page
*********************************************************************/

function weatherInfoLoc() {
  getUserLocation()
    .then(getWeatherInfo) //api call is made
    .catch(function(err) {
      return err;
    });
}

function getTime() {
   var date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var ampm;
   var currentTime;
   var greeting = '';

   if (hours >= 12) {
     greeting = 'Good evening';
   } else {
     greeting = 'Good morning';
   }

   hours = hours % 12;

  // If hours is anything OTHER than 0 (true), then set that hour.
  // If hours is 0 (false), the hour is 12.
   if (hours) {
     hours = hours;
   } else {
     hours = 12;
   }


   createGreeting(greeting);

   minutes = ('0' + minutes).slice(-2);
   currentTime = hours + ':' + minutes;
   return currentTime;
}

function createGreeting(greeting) {
 var displayGreeting = document.getElementById('display-greeting');
 var greetingElement = document.createElement('h2');
 greetingElement.innerHTML = greeting;
 displayGreeting.appendChild(greetingElement);
}

var displayTime = document.getElementById('display-time');
displayTime.innerHTML = getTime();

/***************** ANIMATIONS ***************/

/* When you hover over location div, toggle animation */
var locationHover = document.getElementById('display-location');

locationHover.addEventListener('mouseenter', function() {
 var toggleLocationInfo = document.getElementById('toggle-location-info');
 toggleLocationInfo.classList.add('visible');
}, false)

locationHover.addEventListener('mouseleave', function() {
 var toggleLocationInfo = document.getElementById('toggle-location-info');
 toggleLocationInfo.classList.remove('visible');
}, false)

locationHover.addEventListener('mouseenter', function() {
 var toggleLocation = document.getElementById('toggle-location');
 toggleLocation.classList.add('toggleUp');
}, false)

locationHover.addEventListener('mouseleave', function() {
 var toggleLocation = document.getElementById('toggle-location');
 toggleLocation.classList.remove('toggleUp');
}, false)


/* When you hover over quote div, toggle animation */
var quoteHover = document.getElementById('display-quote');

quoteHover.addEventListener('mouseenter', function() {
 var toggleCitation = document.getElementById('citation');
 toggleCitation.classList.add('visible');
}, false)

quoteHover.addEventListener('mouseleave', function() {
 var toggleCitation = document.getElementById('citation');
 toggleCitation.classList.remove('visible');
}, false)

quoteHover.addEventListener('mouseenter', function() {
 var toggleQuote = document.getElementById('toggle-quote');
 toggleQuote.classList.add('toggleUp');
}, false)

quoteHover.addEventListener('mouseleave', function() {
 var toggleQuote = document.getElementById('toggle-quote');
 toggleQuote.classList.remove('toggleUp');
}, false)

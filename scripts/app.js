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

function getWeatherInfo(params) {
  if (params instanceof Array) {
    var api_key = "d121f5c96a69089c551e68ce0d7ea3a8";
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + params[0] +
         '&lon=' + params[1] + '&units=metric&appid=' + api_key;

    $.getJSON(url, function(data) {
      var iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      $(".weather-icon").attr("src", iconUrl);
      $(".temp-value").text(Math.round(data.main.temp) + "°C");
      $(".location").text(data.name)
    });
  } else {
    $(".temp-value").text("N/A");
    $(".location").text(params.error);
  }
}

/********************************************************************
* If the user allows location tracking get weather info for
* his location and display it on the Momentum index page
*********************************************************************/

function weatherInfoLoc() {
  getUserLocation()
    .then(getWeatherInfo) //api call is made
    .catch(function(err) {
      getWeatherInfo(err);
    });
}

/*=============================================================================
 * Determine user's current local time as well as a Greeting
 *============================================================================*/

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

/*=============================================================================
 * Generate quote
 *============================================================================*/

var quotes = [
		{ name: "Betty Reese",
		  quote: "If you think you are too small to be effective, you have never been in bed with a mosquito."},
		{ name: "John Rawls",
		  quote: "The fairest rules are those to which everyone would agree if they did not know how much power they would have."
		},
		{ name: "Aristotle",
		  quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
		},
		{ name: "Stephen King",
		  quote: "Any word you have to hunt for in a thesaurus is the wrong word. There are no exceptions to this rule."
		},
		{ name:"Jan L.A. van de Snepscheut" ,
		  quote: "In theory there is no difference between theory and practice. But, in practice, there is."
		},
		{ name: "Warren Buffett",
		  quote: "Price is what you pay. Value is what you get."
		},
		{ name: "Gnarls Barkley",
		  quote: "Everybody is somebody, but nobody wants to be themselves."
		},
		{ name: "Thomas Sowell",
		  quote: "Life does not ask what we want. It presents us with options."
		}
	]

var getRandQuote = function(){
	var rand = Math.floor(Math.random() * (quotes.length - 1)) + 1;

	return [quotes[rand].quote, quotes[rand].name];
}

// Display the user's current time and a greeting based on that time
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
}, false);

// Display user location and weather info if applicable
weatherInfoLoc();

// Display random quote
var quote = getRandQuote();
$(".quote").text(quote[0]);
$(".citation").append(quote[1]);

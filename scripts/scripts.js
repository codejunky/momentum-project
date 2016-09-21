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

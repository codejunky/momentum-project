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


//quotes[1]

//var randomNumber = Math.floor(Math.random() * 20) + 1;

var getRandQuote = function(){
	var rand = Math.floor(Math.random() * (quotes.length - 1)) + 1;
	console.log(rand);
	
	return [quotes[rand].quote, quotes[rand].name];
}

getRandQuote()


// loop functionality in progress if needed
/*
var index = 0;
var getNextQuote = function(){
	index++;
	if(index === quotes.length){
		index = 0;
	}
	return [quotes[index - 1].quote, quotes[index - 1].name];
}
*/



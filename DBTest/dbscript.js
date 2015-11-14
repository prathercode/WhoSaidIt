function DisplayQuote() {

var ToBeDisplayed;
var QuoteIncrementer;
var QuoteDB

var ColbertQuotes = [	
						"I apologize for being perfect", 
					 	"Medicare is like a nice set of cufflinks. Nobody wears cufflinks anymore."
				    ];


var TrumpQuotes = [ 
						"We got Obama in there now and the Chinese testing him bing bing bing. You get a woman in there bing bom boom the whole world goes after her.", 
						"I think apologizing's a great thing, but you have to be wrong… I will absolutely apologize, sometimes in the hopefully distant future, if I'm ever wrong.",
						"It's freezing and snowing in New York. We need global warming!", 
						"So many people have told me that I should host Meet the Press and replace the moron who is on now. Just too busy, especially next 10 years!"
				  ];

if(Math.random()<.5)
	{
		QuoteDB = ColbertQuotes;
	}

else
	{
		QuoteDB = TrumpQuotes;
	}

ToBeDisplayed = parseInt((Math.random() * QuoteDB.length), 10);
document.getElementById("quote").innerHTML = QuoteDB[ToBeDisplayed];


}


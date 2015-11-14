function DisplayQuote() {

var ToBeDisplayed;
var QuoteIncrementer;

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
		ToBeDisplayed = ColbertQuotes.length;
		//document.getElementById("demo").innerHTML = "getQuote(ColbertQuotes)";
	}

else
	{
		ToBeDisplayed = TrumpQuotes.length;
		//document.getElementById("demo").innerHTML = "getQuote(TrumpQuotes)";

	}
document.getElementById("demo").innerHTML = ToBeDisplayed;
document.getElementById("quote").innerHTML = ToBeDisplayed;


}


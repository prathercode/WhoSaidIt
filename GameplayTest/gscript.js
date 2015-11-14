window.QuestionPlaying = false;		//global variable that determines if a question is running
window.RealAnswer;						//global variable that stores the correct answer for the current question
window.SelectedAnswer;					//global variable that stores the player's answer
window.HappyMessage = "Good Job!"		//global variable containing response if player is correct
window.SadMessage	= "You're Fired!"	//global variable containing response if player is wrong

function DisplayQuote() {			//function that displays new questions
if (QuestionPlaying = true) {
	document.getElementById("quote").innerHTML = "FAILURE :(";	//Displays a quote

}
else
{
//QuestionPlaying = true;				//Starts a question cycle
var ToBeDisplayed;					//Variable that stores a number that will determine which quote is displayed
var QuoteDB;						//Variable that holds the correct database of questions

var ColbertQuotes = [				//Array Database of Colbert Quotes
						"I apologize for being perfect", 
					 	"Medicare is like a nice set of cufflinks. Nobody wears cufflinks anymore."
				    ];


var TrumpQuotes = [ 				//Array Database of Trump Quotes
						"We got Obama in there now and the Chinese testing him bing bing bing. You get a woman in there bing bom boom the whole world goes after her.", 
						"I think apologizing's a great thing, but you have to be wrong… I will absolutely apologize, sometimes in the hopefully distant future, if I'm ever wrong.",
						"It's freezing and snowing in New York. We need global warming!", 
						"So many people have told me that I should host Meet the Press and replace the moron who is on now. Just too busy, especially next 10 years!"
				  ];

if(Math.random()<.5)				//Randomly determines if question should be a Colbert or Trump quote
	{
		QuoteDB = ColbertQuotes;
		RealAnswer = "Colbert";
	}

else
	{
		QuoteDB = TrumpQuotes;
		RealAnswer = "Trump";
	}

ToBeDisplayed = parseInt((Math.random() * QuoteDB.length), 10);
document.getElementById("quote").innerHTML = QuoteDB[ToBeDisplayed];	//Displays a quote
}
}


		function changeImage() 
		{
		    var image = document.getElementById('myImage');
		    var image2 = document.getElementById('myImage2');
		    if (image.src.match("TrumpGreen")) 
		    {
		        image.src = "../Images/Trumpdefault.jpg";
		        image2.src = "../Images/Colbertdefault.jpg";
		        document.getElementById('whoQ').innerHTML = 'WHO SAID THIS QUOTE?'
		    } 
		    else
		    {
		        image.src = "../Images/TrumpGreen.jpg";
		        image2.src = "../Images/Colbertfade.jpg";
		        document.getElementById('whoQ').innerHTML = 'GOOD JOB!';
		    }
		}
		function changeImage2() 
		{
		    var image = document.getElementById('myImage');
		    var image2 = document.getElementById('myImage2');
		    if (image2.src.match("colbertgreen")) 
		    {
		        image.src = "../Images/Trumpdefault.jpg";
		        image2.src = "../Images/Colbertdefault.jpg"
		        document.getElementById('whoQ').innerHTML = 'WHO SAID THIS QUOTE?'
		    } 
		    else
		    {
		        image.src = "../Images/Trumpfade.jpg";
		        image2.src = "../Images/colbertgreen.jpg";
		        document.getElementById('whoQ').innerHTML = 'GOOD JOB!'
		    }
		}

function SelectTrump()		//Initializes answering process if Trump is the selected answer choice
{
	if (QuestionPlaying = true) 
	{
		changeImage();
		//document.getElementById('trumptest').innerHTML = "SUCCESS!!!!"
		//SelectedAnswer = "Trump";
		//answerQuote();
	}
	
	//else 
	//{
	//	changeImage2();
	//}
}

function SelectColbert()	//Initializes answering process if Colbert is the selected Answer Choice
{
	if (QuestionPlaying = true) 
	{
		changeImage2();
		//document.getElementById('colbtest').innerHTML = "SUCCESS!!!!"
		//SelectedAnswer = "Colbert";
		//answerQuote();
	}
}

var QuestionPlaying = new Boolean(false);
										//global variable that determines if a question is running
window.RealAnswer;						//global variable that stores the correct answer for the current question
window.SelectedAnswer;					//global variable that stores the player's answer
window.HappyMessage = "Good Job!"		//global variable containing response if player is correct
window.SadMessage	= "You're Fired!"	//global variable containing response if player is wrong



function DisplayQuote() 				//function that displays new questions
{	
	reset();							//resets for the initialization of a question cycle
	QuestionPlaying = true;				//Demarcates the initialization of a question cycle
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


	
function SelectTrump()		//Initializes answering process if Trump is the selected answer choice
{
	if (QuestionPlaying === true) 
	{
		SelectedAnswer = "Trump";
		answerQuote();
	}
}

function SelectColbert()	//Initializes answering process if Colbert is the selected Answer Choice
{
	if (QuestionPlaying === true) 
	{
		SelectedAnswer = "Colbert";
		answerQuote();
	}
}

function answerQuote()		//Checks if the player is correct or incorrect
{
	if (SelectedAnswer === RealAnswer)
		{
			
     	 	CorrectAnswer();
		}
	
	else
		{
			WrongAnswer();
		}
}

function CorrectAnswer()	//Color functionality if player is correct
{
	if 	(SelectedAnswer === "Colbert") 
		{		
				var image = document.getElementById('myImage');
		    	var image2 = document.getElementById('myImage2');
				image.src = "../Images/SelectedColbertCorrectTrump.jpg";
		        image2.src = "../Images/SelectedColbertCorrect.png";
		}

	else
		{
				var image = document.getElementById('myImage');
		    	var image2 = document.getElementById('myImage2');
				image.src = "../Images/SelectedTrumpCorrect.png";
		        image2.src = "../Images/SelectedTrumpCorrectColbert.jpg";
		}

	document.getElementById('whoQ').innerHTML = HappyMessage;
}

function WrongAnswer()		// Color functionality if player is wrong
{
	if (SelectedAnswer === "Colbert")
		{
			image.src = "../Images/TrumpDefault.png";
		    image2.src = "../Images/SelectedColbertIncorrect.png";
		}	

	else
		{
			image.src = "../Images/SelectedTrumpIncorrect.png";
		    image2.src = "../Images/ColbertDefault.png";
		}	
	document.getElementById('whoQ').innerHTML = SadMessage;
}

function reset()
{
	var image = document.getElementById('myImage');
	var image2 = document.getElementById('myImage2');
		image.src = "../Images/TrumpDefault.png";
		image2.src = "../Images/ColbertDefault.png";
	document.getElementById('whoQ').innerHTML = 'WHO SAID THIS QUOTE?';
}
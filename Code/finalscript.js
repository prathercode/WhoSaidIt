var QuestionPlaying = new Boolean(false);
										//global variable that determines if a question is running
window.RealAnswer;						//global variable that stores the correct answer for the current question
window.SelectedAnswer;					//global variable that stores the player's answer
window.HappyMessage = "Good Job!";		//global variable containing response if player is correct
window.SadMessage	= "You're Fired!";	//global variable containing response if player is wrong
var RightGuessCount = 0;
var WrongGuessCount = 0;
var Streak = 0;
var TopStreak = 0;
var LastColbert;
var LastTrump;

function setStartingStats()
{
	document.getElementById("rGVal").innerHTML = RightGuessCount;
	document.getElementById("wGVal").innerHTML = WrongGuessCount;	
	document.getElementById("cSVal").innerHTML = Streak;
	document.getElementById("bSVal").innerHTML = TopStreak;
}


function DisplayQuote() 				//function that displays new questions. Called by clicking start button, and then by clicking next comment.
{	
	document.getElementsByClassName('button-0')[0].innerHTML = "NEXT!"  // Changes name of thing to next				
	reset();							//resets for the initialization of a question cycle
	QuestionPlaying = true;				//Demarcates the initialization of a question cycle
	var ToBeDisplayed;					//Variable that stores a number that will determine which quote is displayed
	var QuoteDB;						//Variable that holds the correct database of questions

	var ColbertQuotes = [				//Array Database of Colbert Quotes
							"I apologize for being perfect", 
					 		"Medicare is like a nice set of cufflinks. Nobody wears cufflinks anymore.",
							"I don't accept the status quo. I do accept Visa, MasterCard, or American Express.",
							"It used to be, everyone was entitled to their own opinion, but not their own facts. But that's not the case anymore. Facts matter not at all. Perception is everything.",
							"We got Obama in there now and the Chinese testing him bing bing bing. You get a woman in there bing bom boom the whole world goes after her.", 
							"If our founding fathers wanted us to care about the rest of the world, they wouldn't have declared our independence from it.",
							"The pen is mightier than the sword if you shoot that pen out of a gun.",
							"Of course! Jeb Bush! America is hungry for another leader from that talented family!",
							"[I'm] a nice guy. I go to church I teach Sunday school. I have family values."
						];


	var TrumpQuotes = [ 				//Array Database of Trump Quotes
							
							"I think apologizing's a great thing, but you have to be wrong... I will absolutely apologize, sometimes in the hopefully distant future, if I'm ever wrong.",
							"It's freezing and snowing in New York. We need global warming!", 
							"So many people have told me that I should host Meet the Press and replace the moron who is on now. Just too busy, especially next 10 years!",
							"I try to learn from the past, but I plan for the future by focusing exclusively on the present. That's where the fun is.",
							"If you can't get rich dealing with politicians, there's something wrong with you.",
							"Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog, and will do it again, just watch. He can do much better!",
							"My fingers are long and beautiful, as, it has been well been documented, are various other parts of my body."
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

	if (RealAnswer == "Colbert")  //prevents back to back duplicates
		{
			if (ToBeDisplayed==LastColbert)
				{
					if(ToBeDisplayed > (QuoteDB.length)/2)
						{
							ToBeDisplayed--;
						}
					else
						{
							ToBeDisplayed++;
						}
				}
				LastColbert = ToBeDisplayed;
		}		

	else
		{
			if (ToBeDisplayed==LastTrump)
				{
					if(ToBeDisplayed > (QuoteDB.length)/2)
						{
							ToBeDisplayed--;
						}
					else
						{
							ToBeDisplayed++;
						}
				}
				LastTrump = ToBeDisplayed;	
		}	
	document.getElementsByClassName('button-0')[0].innerHTML = "PASS!";
}


function ButtonMethod() //manages the button that is start, pass, and next
{
	if (document.getElementsByClassName('button-0')[0].innerHTML == ("PASS!")) 
		{
			if(Streak>TopStreak)
				{
					TopStreak = Streak;
				}
			Streak = 0;
			document.getElementById("cSVal").innerHTML = Streak;
			document.getElementById("bSVal").innerHTML = TopStreak;
		}
	DisplayQuote();
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

function answerQuote()		//Checks if the player is correct or incorrect, and makes a decision
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

function CorrectAnswer()	// if player choice is correct
{
	if 	(SelectedAnswer === "Colbert") 
		{		
				var image = document.getElementById('myImage');
		    	var image2 = document.getElementById('myImage2');
				image.src = "../Images/SelectedColbertCorrectTrump.jpg";
		        image2.src = "../Images/SelectedColbertCorrect.png";
		        playCCFile();
		}

	else
		{
				var image = document.getElementById('myImage');
		    	var image2 = document.getElementById('myImage2');
				image.src = "../Images/SelectedTrumpCorrect.png";
		        image2.src = "../Images/SelectedTrumpCorrectColbert.jpg";
		        playTCFile();
		}

	QuestionPlaying = false;
	document.getElementById('whoQ').innerHTML = HappyMessage;
	RightGuessCount++;
	Streak++;
	if(Streak>TopStreak)
	{
		TopStreak = Streak;
	}
	document.getElementById("rGVal").innerHTML = RightGuessCount;
	document.getElementById("wGVal").innerHTML = WrongGuessCount;
	document.getElementById("cSVal").innerHTML = Streak;
	document.getElementById("bSVal").innerHTML = TopStreak;
	document.getElementsByClassName('button-0')[0].innerHTML = "NEXT!";
}

function WrongAnswer()		// if player choice is wrong
{
	if (SelectedAnswer === "Colbert")
		{
			var image = document.getElementById('myImage');
		    var image2 = document.getElementById('myImage2');
			image.src = "../Images/TrumpDefault.png";
		    image2.src = "../Images/SelectedColbertIncorrect.png";
		    playCXFile();
		}	

	else
		{
			var image = document.getElementById('myImage');
		    var image2 = document.getElementById('myImage2');
			image.src = "../Images/SelectedTrumpIncorrect.png";
		    image2.src = "../Images/ColbertDefault.png";
		    playTXFile();
		}	
	QuestionPlaying = false;
	document.getElementById('whoQ').innerHTML = SadMessage;
	WrongGuessCount++;
	if(Streak>TopStreak)
	{
		TopStreak = Streak;
	}
	Streak = 0;
	document.getElementById("rGVal").innerHTML = RightGuessCount;
	document.getElementById("wGVal").innerHTML = WrongGuessCount;
	document.getElementById("cSVal").innerHTML = Streak;
	document.getElementById("bSVal").innerHTML = TopStreak;
	document.getElementsByClassName('button-0')[0].innerHTML = "NEXT!";
}

function reset() //reset method for clearing 
{
	var image = document.getElementById('myImage');
	var image2 = document.getElementById('myImage2');
		image.src = "../Images/TrumpDefault.png";
		image2.src = "../Images/ColbertDefault.png";
		document.getElementById('whoQ').innerHTML = 'Who Said It?';
	var x = document.getElementById('whoQ');
   		x.style.fontSize = "24px";           
    	x.style.color = "Black"; 
}

//Establishing countdown style timer
var timeInSecs;
var ticker;

function startTimer(secs)
{
	timeInSecs = parseInt(secs)-1;
	ticker = setInterval("tick()",1000);   // every second
}

function tick() 
{
	var secs = timeInSecs;
	if (secs>0) 
	{
		timeInSecs--;
	}
	
	else 
	{
		TimeRunsOut();
	}

document.getElementById("countdown").innerHTML = secs;
}  

function TimeRunsOut()
{
	endTimer();
	var image = document.getElementById('myImage');
	var image2 = document.getElementById('myImage2');
	if(CorrectAnswer == "Colbert")
		{
			image.src = "../Images/SelectedTrumpIncorrect.png";
		    image2.src = "../Images/SelectedColbertCorrect.png";
		    playTXFile();
		}
	else
		{
			image.src = "../Images/SelectedTrumpCorrect.png";
		    image2.src = "../Images/SelectedColbertIncorrect.png";
		   	playCXFile();
		}	
	document.getElementById('whoQ').innerHTML = "Time's Up!";
	var x = document.getElementById('whoQ');
    x.style.fontSize = "35px";           
    x.style.color = "Red"; 
}

function endTimer()
{
	clearInterval(ticker); // stop counting at zero
}

//These functions deal with the voice files
function playTCFile()
{
	var CorrectTrumpSound = 	[
									document.getElementById('trumpBrilliant'),
									document.getElementById('trumpCongrats'),
									document.getElementById('trumpEK'),
									document.getElementById('trumpFantastic'),
								];
	var TCInt = parseInt((Math.random() * CorrectTrumpSound.length), 10);
	CorrectTrumpSound[TCInt].play();
}
function playTXFile()
{
	var IncorrectTrumpSound = 	[
									document.getElementById('trumpFired1'),
									document.getElementById('trumpFired2'),
									document.getElementById('trumpWantSome'),
									document.getElementById('trumpIDTS'),
								];
	var TXInt = parseInt((Math.random() * IncorrectTrumpSound.length), 10);
	IncorrectTrumpSound[TXInt].play();
}
function playCCFile()
{
	var CorrectColbertSound = 	[
									document.getElementById('colbertAmerica'),
									document.getElementById('colbertRingtone'),
									document.getElementById('colbertLegal'),
									document.getElementById('colbertYes'),
								];
	var CCInt = parseInt((Math.random() * CorrectColbertSound.length), 10);
	CorrectColbertSound[CCInt].play();
}
function playCXFile()
{
	var IncorrectColbertSound = [
									document.getElementById('colbertDung'),
									document.getElementById('colbertNope'),
									document.getElementById('colbertBam'),
									document.getElementById('colbertNo'),
								];
	var CXInt = parseInt((Math.random() * IncorrectColbertSound.length), 10);
	IncorrectColbertSound[CXInt].play();
}
function motivate(str)
{ 
	document.getElementById("name-head").innerHTML = str; 
	var names = str.split(" ");
	var firstName = names[0]; 
	var option1 = firstName + ",<br>If you hear a voice within you say \"you cannot paint,\" then by all means paint, and that voice will be silenced.<br>Your friend and constant supporter,<br>Vincent Van Gogh"; 
	var option2 = "Dear " + firstName + ",<br>" + "Success consists of going from failure to failure without loss of enthusiasm.<br>" + "Love,<br>Winston Churchill"; 
	var option3 = firstName + ",<br> Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma, which is living the result of other people's thinking. Don't let the noise of other's opinion drowned your own inner voice. And most important, " + firstName + ", have the courage to follow your heart and intuition, they somehow already know what you truly want to become. Everything else is secondary.<br>Keep your head up " + firstName + ",<br>Steve Jobs"; 
	var option4 = firstName + ",<br>When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.<br>Wishing you the best,<br>Alexander Graham Bell";
	var option5 = firstName + ",<br>our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.<br>I hope you choose to try today " + firstName + ",<br>Thomas Edison"; 
	var option6 = "Just so you know " + firstName + ",<br>To love oneself is the beginning of a lifelong romance.<br>Your friend and confident,<br>Oscar Wilde";
	var options = [option1, option2, option3, option4, option5, option6];
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max-min)) + min;
	}
	console.log(getRandomInt(0,options.length));
	document.getElementById("m-paragraph").innerHTML = options[getRandomInt(0,options.length)];
	document.getElementById("m-paragraph").style.border = "double 10px black"; 
	document.getElementById("m-paragraph").style.padding = "10px";  
}

function confetti()
{
	var elem = document.getElementById("confetti");
	var pos = 0;
	var id = setInterval(frame, 5); 
	function frame() {
		if (pos == 350) {
 			clearInterval(id); 
		}
		else {
			pos++;
			elem.style.top = pos + "px"; 
		}
	}
} 

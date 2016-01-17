function motivate(str)
{ 
	document.getElementById("name-head").innerHTML = str; 
	var names = str.split(" ");
	var firstName = names[0]; 
	var option1 = firstName + ",<br>If you hear a voice within you say \"you cannot paint,\" then by all means paint, and that voice will be silenced.<br>Your friend and constant supporter,<br>Vincent Van Gogh"; 
	var option2 = "Dear " + firstName + ",<br>" + "Success consists of going from failure to failure without loss of enthusiasm.<br>" + "Love,<br>Winston Churchill"; 
	var option3 = firstName + ",<br> Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma, which is living the result of other people's thinking. Don't let the noise of other's opinion drowned your own inner voice. And most important, " + firstName + ", have the courage to follow your heart and intuition, they somehow already know what you truly want to become. Everything else is secondary.<br>Keep your head up " + firstName + ",<br>Steve Jobs"; 
	var option4 = firstName + ",<br>When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.<br>Wishing you the best,<br>Alexander Graham Bell";
	var option5 = firstName + ",<br>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.<br>I hope you choose to try today " + firstName + ",<br>Thomas Edison"; 
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
	var pos = 80; 
	var elem1 = document.getElementById("confetti1");
	var pos1 = 16;
	var elem2 = document.getElementById("confetti2");
	var pos2 = 111; 
	var elem3 = document.getElementById("confetti3"); 
	var pos3 = 60; 
	var elem4 = document.getElementById("confetti4"); 
	var pos4 = 0;  
	var id = setInterval(frame, 5); 
	elem.style.backgroundColor = "red";
	elem1.style.backgroundColor = "blue";
	elem2.style.backgroundColor = "yellow";
	elem3.style.backgroundColor = "green";
	elem4.style.backgroundColor = "purple"; 
	function frame() {
		if (pos = 450) {
 			clearInterval(id);
			elem.style.backgroundColor = "white";
			elem1.style.backgroundColor = "white";
			elem2.style.backgroundColor = "white";
			elem3.style.backgroundColor = "white";
			elem4.style.backgroundColor = "white"; 
		}
		else {
			pos++;
			elem.style.top = pos + "px";
			pos1++;
			elem1.style.top = pos1 + "px";
			pos2++;
			elem2.style.top = pos2 + "px";
			pos3++;
			elem3.style.top = pos3 + "px";
			pos4++; 
			elem4.style.top = pos4 + "px";   
		}
	}
}

/*function confetti()
{
	confetti0(); 
	function confetti0() {
		var elem = document.getElementById("confetti"); 
		var pos = 80;   
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
}*/

function changeColor(str)
{
	document.getElementById("m-paragraph").style.backgroundColor = str; 
} 

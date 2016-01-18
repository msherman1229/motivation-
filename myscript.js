function motivate(str)
{ 
	document.getElementById("name-head").innerHTML = str; 
	var names = str.split(" ");
	var firstName = names[0]; 
	var option1 = "<b>" + firstName + "<b>,<br>If you hear a voice within you say \"you cannot paint,\" then by all means paint, and that voice will be silenced.<br>Your friend and constant supporter,<br>Vincent Van Gogh"; 
	var option2 = "Dear <b>" + firstName + "</b>,<br>" + "Success consists of going from failure to failure without loss of enthusiasm.<br>" + "Love,<br>Winston Churchill"; 
	var option3 = "<b>" + firstName + "</b>,<br> Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma, which is living the result of other people's thinking. Don't let the noise of other's opinion drowned your own inner voice. And most important, <b>" + firstName + "</b>, have the courage to follow your heart and intuition, they somehow already know what you truly want to become. Everything else is secondary.<br>Keep your head up <b>" + firstName + "</b>,<br>Steve Jobs"; 
	var option4 = "<b>" + firstName + "</b>,<br>When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.<br>Wishing you the best,<br>Alexander Graham Bell";
	var option5 = "<b>" + firstName + "</b>,<br>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.<br>I hope you choose to try today <b>" + firstName + "</b>,<br>Thomas Edison"; 
	var option6 = "Just so you know <b>" + firstName + "</b>,<br>To love oneself is the beginning of a lifelong romance.<br>Your friend and confident,<br>Oscar Wilde";
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
	document.getElementById("red-balloon").src = "red.png";
        document.getElementById("blue-balloon").src = "blue.png";
        document.getElementById("yellow-balloon").src = "yellow.png";
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
	var elem5 = document.getElementById("confetti5");
	var pos5 = 90;
	var elem6 = document.getElementById("confetti6");
	var pos6 = 100;
	var elem7 = document.getElementById("confetti7");
	var pos7 = 65; 
	var elem8 = document.getElementById("confetti8");
	var pos8 = 20;
	var elem9 = document.getElementById("confetti9");
	var pos9 = 10;   
	var id = setInterval(frame, 3); 
	elem.style.backgroundColor = "red";
	elem1.style.backgroundColor = "blue";
	elem2.style.backgroundColor = "yellow";
	elem3.style.backgroundColor = "red";
	elem4.style.backgroundColor = "blue";
	elem5.style.backgroundColor = "yellow";
	elem6.style.backgroundColor = "red";
	elem7.style.backgroundColor = "blue";
	elem8.style.backgroundColor = "yellow";
	elem9.style.backgroundColor = "red";
	elem.style.boxShadow = "5px 5px 5px";
	elem1.style.boxShadow = "5px 5px 5px";
	elem2.style.boxShadow = "5px 5px 5px";
	elem3.style.boxShadow = "5px 5px 5px";
	elem4.style.boxShadow = "5px 5px 5px";
	elem5.style.boxShadow = "5px 5px 5px";
	elem6.style.boxShadow = "5px 5px 5px";
	elem7.style.boxShadow = "5px 5px 5px";
	elem8.style.boxShadow = "5px 5px 5px";
	elem9.style.boxShadow = "5px 5px 5px"; 
	function frame() {
		if (pos == 425) {
			pos = 80; 
			pos1 = 16; 
			pos2 = 111; 
			pos3 = 60; 
			pos4 = 0; 
			pos5 = 90; 
			pos6 = 100; 
			pos7 = 65; 
			pos8 = 20;
			pos9 = 10;  
		}
		else if (pos != 425) {
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
			pos5++;
			elem5.style.top = pos5 + "px";
			pos6++;
			elem6.style.top = pos6 + "px";
			pos7++;
			elem7.style.top = pos7 + "px";
			pos8++;
			elem8.style.top = pos8 + "px";
			pos9++;
			elem9.style.top = pos9 + "px";
		}
	}
}


function changeColor(str)
{
	document.getElementById("m-paragraph").style.backgroundColor = str; 
} 

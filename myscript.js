function motivate(str)
{ 
	document.getElementById("name-head").innerHTML = str; 
	var names = str.split(" ");
	var firstName = names[0]; 
	var option1 = firstName + ", if you hear a voice within you say \"you cannot paint,\" then by all means paint, and that voice will be silenced. Your friend, Vincent Van Gogh"; 
	var option2 = "Dear, " + firstName + "Success consists of going from failure to failure without loss of enthusiasm. " + "Love, Winston Churchill"; 
	var option3 = firstName + ", Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma, which is living the result of other people's thinking. Don't let the noise of other's opinion drowned your own inner voice. And most important, " + firstName + " have the courage to follow your heart and intuition, they somehow already know what you truly want to become. Everything else is secondary. Keep your head up " + firstName + ", Steve Jobs"; 
	var option4 = firstName + ", When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us. Wishing you the best, Alexander Graham Bell";
	var option5 = firstName + ", our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. I hope you choose to make today a good day " + firstName + ", Sincerely Thomas Edison"; 
	var options = [option1, option2, option3, option4, option5];
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max-min)) + min;
	}
	console.log(getRandomInt(0,options.length));
	document.getElementById("m-paragraph").innerHTML = options[getRandomInt(0,options.length)];   
}

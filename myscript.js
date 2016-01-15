function motivate(str)
{ 
	document.getElementById("name-head").innerHTML = str;
	document.getElementById("name-head").style.color = "red"; 
	var names = str.split(" "); 
	document.getElementById("name-head").innerHTML += names[0] + " is your first name" ; 
}

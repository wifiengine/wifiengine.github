
var gamebutton = document.getElementById("gamebutton");


//game button being hovered over
gamebutton.onmouseenter = function() {
    //gamebutton.style.opacity = "0.9";
    gamebutton.style.borderBottomRightRadius = "20px";
    gamebutton.style.borderBottomLeftRadius = "20px";
}
gamebutton.onmouseleave = function() {
    //gamebutton.style.opacity = "1";
    gamebutton.style.borderBottomRightRadius = "0px";
    gamebutton.style.borderBottomLeftRadius = "0px";
}
//game button's functionality
gamebutton.onclick = function() {
				alert("Welcome to the game of blockades.");
	var name = prompt("What is your name?");
	var age  = prompt("What is your age?");

	if(age < 3) {
		alert("Im surprised that you understand how to work this");
		dev();
	}
	else if(age > 2 && age < 18) {
		alert("Welcome, youth, It is a pleasure to have you here");
		dev();
	}
	else if(age > 17) {
		alert("The adult life is busy. Where do you find the time to come here");
		dev();
	}
	else {
		alert("not a number.");
	}

	function dev() {
		alert("this game is still in development. \n Please come again later or \n further explore this site")
	}

}

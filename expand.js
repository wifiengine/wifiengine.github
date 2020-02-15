//expand button to expand youtube videos
var expand = document.getElementById("vid_expand");
var vids = document.getElementsByClassName("iframe");

//if the videos are expanded or not
var isexpanded = false;

//expand button being hovered over
expand.onmouseenter = function() {
    expand.style.backgroundColor = "red";
}
expand.onmouseleave = function() {
    expand.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
} 


//if the button is clicked
expand.onclick = function() {
	if(isexpanded == false) {
		
			isexpanded = true;
			vids[0].style.display = "block";
			vids[1].style.display = "block";
			vids[2].style.display = "block";
			expand.innerHTML = "↓";
	}
	else if(isexpanded == true) {
		
			isexpanded = false;
			vids[0].style.display = "none";
			vids[1].style.display = "none";
			vids[2].style.display = "none";
			expand.innerHTML = "↑";	
	}
}

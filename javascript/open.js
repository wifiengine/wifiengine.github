//variables
var mailbutton = document.getElementById("sendmail");
var youtube = document.getElementById("youtube");
var github = document.getElementById("github");

 //specify what buttons open
mailbutton.onclick = function() {
  window.open("mailto:wifiengine@gmail.com");
}

youtube.onclick = function() {
  window.open("https://www.youtube.com/channel/UCCuQJldDoh9mdMuGtXR6B3A?view_as=subscriber");
}

github.onclick = function() {
  window.open("https://github.com/wifiengine");
}

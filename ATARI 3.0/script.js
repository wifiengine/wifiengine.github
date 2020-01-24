var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");
var x = 500;
var y = window.innerHeight - 20;
var bx = 15 + Math.random()*window.innerWidth - 30;
var by = 15 + Math.random()*window.innerHeight -30;
var speedx = 2;
var speedy = 2;
var score = 0;
var timen = 0;
var level = 0;
var col = 0;
var colors = ["#F26419","#00cc44"," #ff0000","#DEB841"];
var lev;
var scores = []
var h1 = document.getElementById("h1");
var col1 = col + 1;
var gamebutton = document.getElementById("gamebutton");
var mailbutton = document.getElementById("mailto");
var youtube = document.getElementById("youtube");
var dark_mode = document.getElementById("dark_mode");
var darkbutton = document.getElementById("dark");
var isdark = false;

//canvas color
canvas.style.background="#2A324A";





function init() { 
setInterval(run, 10);
setInterval(time,1000);
lev = setInterval(leveln,10000);

}
init()





function run(run) {
 

//heading color
h1.style.color = colors[col];
h1.style.background = "#000";







//mailto button color
mailbutton.style.color = "#000";
mailbutton.style.background = colors[col];

//mailto button being hovered over
mailbutton.onmouseenter = function() {
    mailbutton.style.opacity = "0.9";
}
mailbutton.onmouseleave = function() {
    mailbutton.style.opacity = "1";
}   


//game button color
gamebutton.style.color = "#000";
gamebutton.style.background = colors[col1];



//youtube button color
youtube.style.color = "#000";
youtube.style.background = colors[col];

//youtube button being hovered over
youtube.onmouseenter = function() {
    youtube.style.opacity = "0.9";
}
youtube.onmouseleave = function() {
    youtube.style.opacity = "1";
}

//redirect to youtube
youtube.onclick = function() {
    window.open("https://www.youtube.com/channel/UCCuQJldDoh9mdMuGtXR6B3A?view_as=subscriber")
}


//dark button color
darkbutton.style.color = "#000";
darkbutton.style.background = colors[col1];

//dark button being hovered over
darkbutton.onmouseenter = function() {
    darkbutton.style.opacity = "0.9";
}
darkbutton.onmouseleave = function() {
    darkbutton.style.opacity = "1";
}

//toggle dark mode button
if(isdark == false) {
    darkbutton.onclick = function() {
        dark_mode.style.background = "rgba(0,0,0,0.7)";
        isdark = true;
    }
}
if(isdark == true) {
    darkbutton.onclick = function() {
        dark_mode.style.background = "rgba(0,0,0,0)";
        isdark = false;
    }
}






//resetting gamebutton colors
if(col1 == colors.length) {
    col1 = 0;
}





//canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//bounce on the sides
if(bx - 15 < 0 || bx + 15 > window.innerWidth) {
    speedx = -speedx;
}
//bounce on the top
if(by - 15 < 0) {
    speedy = -speedy;
}
//bounce on bar
if(by + 15 > y && bx > x && bx < x + 200 && by - 15 < y) {
speedy = -speedy;
score += 1;
scores.push(score);
col += 1;
col1 += 1;
}
//gameover
if(by - 15 > y) {
    gameover();
}
//ball stuck in sides
if((bx < 0 || bx > window.innerWidth || by < 0) && by < y) {
    location.reload();
}
//preventing bar from going over the sides
if (x - 10 < 0) {
    x = 10;
}
if (x + 210 > window.innerWidth) {
    x = window.innerWidth - 210;
}
//preventing glitch
if(bx > x - 20 && bx < x && by + 15 > y && by - 15 < y + 20) {
    draw.translate(x, y);
    draw.rotate(45 * Math.PI / 180);
    speedy = -speedy;
    speedx = -speedx;
    score += 5;
    scores.push(score);
    col += 1;
    col1 += 1;

}
if(bx > x + 200 && bx < x + 220 && by + 15 > y && by - 15 < y + 20) {
    draw.translate(x, y);
    draw.rotate(45 * Math.PI / 180);
    speedy = -speedy;
    speedx = -speedx;
    score += 5;
    scores.push(score);
    col += 1;
    col1 += 1

}
//reset default color
if(col > colors.length - 1) {
    col = 0;
}




function gameover() {


//tranclucent background

    draw.fillStyle = "rgba(0,0,0,0.5)";
    draw.fillRect(0,0,window.innerWidth,window.innerHeight);
    draw.fill();
    
    draw.font = "20px Source Code Light, tlwg typewriter, terminal, arial";
    draw.textAlign = "center";
    draw.fillStyle = "#ffffff";
    draw.fillText("GAME OVER!",window.innerWidth / 2,window.innerHeight / 2);
    draw.fillText("Score: " + score,window.innerWidth / 2,window.innerHeight / 2 + 40);
    draw.fillText("Level: " + level,window.innerWidth / 2,window.innerHeight / 2 + 80);
    draw.fillText("<Click anywhere to continue>",window.innerWidth / 2,window.innerHeight / 2 + 160);
    
    clearInterval(lev);

    canvas.addEventListener("mousedown",function() {
    window.location.href = "index.html";    
    });





}


//draws bottom bar
draw.beginPath();    
draw.fillStyle = colors[col];
draw.moveTo(x,y);
draw.lineTo(x+200,y)
draw.lineTo(x+210,y+10);
draw.lineTo(x+200,y+20);
draw.lineTo(x,y+20);
draw.lineTo(x-10,y+10);
draw.lineTo(x,y);
draw.fill();
draw.closePath();

//draws 'scroll for more' text
draw.font = "20px Source Code Light, tlwg typewriter, terminal, arial";
draw.textAlign = "center";
draw.fillStyle = "#ffffff";
draw.fillText("scroll for more", x + 100, y - 1);

//draws ball
draw.beginPath();
draw.fillStyle = "#5CABFF";
draw.arc(bx,by,15,0,2*Math.PI);
draw.fill();
draw.closePath();

bx += speedx;
by -= speedy;

draw.font = "20px Source Code Light, tlwg typewriter, terminal, arial";
draw.textAlign = "right";
draw.fillStyle = "#ffffff";
draw.fillText("Score: " + score,1350,30);

draw.font = "20px Source Code Light, tlwg typewriter, terminal, arial";
draw.textAlign = "left";
draw.fillStyle = "#ffffff";
draw.fillText("Time: " + timen,10,30);

draw.font = "20px Source Code Light, tlwg typewriter, terminal, arial";
draw.textAlign = "center";
draw.fillStyle = "#ffffff";
draw.fillText("Level: " + level,600,30);



};
//getting mouse coordinates
window.addEventListener("touchmove",function (e) {
    x = e.touches[0].pageX -100;
});
window.addEventListener("mousemove",function (e) {
    x = e.clientX -100;
});


function time(time) {
timen += 1;
};

function leveln(leveln) {
level += 1;

if(speedx > 0) {
    speedx += 1;
}
else {
    speedx -= 1;
}
if(speedy > 0) {
    speedy += 1;
}
else {
    speedy -= 1;
}


}

//sends mail
mailbutton.onclick = function() {
    window.open("mailto:wifiengine@gmail.com")
}


        
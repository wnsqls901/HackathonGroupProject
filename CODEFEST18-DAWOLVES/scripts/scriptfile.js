var canvas;
var document;
var ctx;
var x;
var y;
var radius;
var circ = new Circle(300,300,50);
var lives = 3;

 canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");



function Circle(xplane,yplane,r){
    x = xplane;
    y =yplane;
    radius = r
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(300,300,50,0,Math.PI *2);
    ctx.fillStyle = "#00cc00";
    ctx.fill();


}

function drawLives(){
	ctx.font ="16px Arial";
	ctx.fillStyle ="#0095DD";
	ctx.fillText("Lives: " + lives, canvas.width -65,20);
	}

function init(){

    drawBall();

}

window.onload = function(){
    init();
}

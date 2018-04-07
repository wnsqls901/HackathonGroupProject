var canvas;
var document;
var ctx;
var x;
var y;
var radius;
var GameLevels = {"LevelOne":1, "LevelTwo":2, "LevelThree":3, "LevelFour":4, "LevelFive":5} Object.freeze(GameLevels);
var rectangle = new Rectangle(300,300,50,50);
var lives = 3;

 canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

function Rectangle(w, l){
    w = xplane;
    l = yplane;
}
function drawGame() {
    ctx.fillRect(20,20,150,100);
}

function drawLives(){
	ctx.font ="16px Arial";
	ctx.fillStyle ="#0095DD";
  ctx.stroke();
	}

function init(){

    drawGame();
}

window.onload = function(){
    init();
}

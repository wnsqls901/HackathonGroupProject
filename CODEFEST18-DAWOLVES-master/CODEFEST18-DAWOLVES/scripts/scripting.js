window.onload = function() {


 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 document.getElementById("up").addEventListener("click", up);
 document.getElementById("down").addEventListener("click", down);
 document.getElementById("left").addEventListener("click", left);
 document.getElementById("right").addEventListener("click", right);

 var x = 15;
 var y = 15;

 var ballRadius = 15;

 var dx = 30;
 var dy = 30;

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function up(){
  if(y - dy > canvas.height-ballRadius || y - dy < ballRadius) {
    y -= 0;
    draw();
  } else {
    y -= dy;
    draw();
  }
}

function down(){
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    y -= 0;
    draw();
  } else {
    y += dy;
    draw();
  }
}

function left(){
  if(x - dx> canvas.width-ballRadius || x - dx < ballRadius) {
    x -= 0;
    draw();
  } else {
    x -= dx;
    draw();
  }
}

function right(){
  if(x + dx > canvas.width-ballRadius || x + dx< ballRadius) {
    x += 0;
    draw();
  } else{
    x += dx;
    draw();
  }
}

draw();



}

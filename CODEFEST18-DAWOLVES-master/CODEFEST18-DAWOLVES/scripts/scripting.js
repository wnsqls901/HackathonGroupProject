window.onload = function() {


 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 document.getElementById("up").addEventListener("click", up);
 document.getElementById("down").addEventListener("click", down);
 document.getElementById("left").addEventListener("click", left);
 document.getElementById("right").addEventListener("click", right);

 var x = canvas.width/15;
 var y = canvas.height-30;

 var dx = 30;
 var dy = -30;

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();


}


function up(){
  y += dy;
  draw();
}

function down(){
  y -= dy;
  draw();
}

function left(){
 x -= dx;
 draw();
}

function right(){
  x += dx;
  draw();
}



draw();




}

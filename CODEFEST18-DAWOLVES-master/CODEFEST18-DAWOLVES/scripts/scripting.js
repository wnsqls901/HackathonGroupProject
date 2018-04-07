window.onload = function() {

 document.getElementById("up").addEventListener("click", up);
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");


 var x = canvas.width/15;
 var y = canvas.height-30;

 var dx = 30;
 var dy = -30;

function draw(){

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







draw();




}

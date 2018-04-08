window.onload = function() {


 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 document.getElementById("execute").addEventListener("click",execute);
 document.getElementById("up").addEventListener("click", up);
 document.getElementById("down").addEventListener("click", down);
 document.getElementById("left").addEventListener("click", left);
 document.getElementById("right").addEventListener("click", right);



 var x = 50;
 var y = 380;

 var ballRadius = 15;

 var dx = 97;
 var dy = 85;





function draw(){
  clear();
  drawGrid();
  ctx.beginPath();
  ctx.arc(x,y,ballRadius,0,Math.PI *2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function clear(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function drawGrid(){
  drawHorizontalLines();
  drawVerticalLines();
}

function drawHorizontalLines(){
  startX = 0
  startY= 84
  endX= 780
  endY=84
  for(i = 0; i < 6; i ++){
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();

    startY += 84
    endY += 84
  }
}

  function drawVerticalLines(){
    startX = 97.5
    startY= 0
    endX= 97.5
    endY=420
    for(i = 0; i < 8; i ++){
      ctx.moveTo(startX,startY);
      ctx.lineTo(endX,endY);
      ctx.stroke();

      startX += 97.5
      endX += 97.5
    }

}


function up(){
  if(y - dy > canvas.height-ballRadius || y - dy < ballRadius) {
    y -= 0;
    draw();
    clear();
    draw();
  } else {
    y -= dy;
    draw();
    clear();
    draw();
  }
}

function down(){
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    y += 0;
    draw();
    clear();
    draw();
  }
     else {
    y += dy;
    draw();
    clear();
    draw();  }
}

function left(){
  if(x - dx> canvas.width-ballRadius || x - dx < ballRadius) {
    x -= 0;
    draw();
    clear();
    draw();  } else {
    x -= dx;
    draw();
    clear();
    draw();  }
}

function right(){
  if(x + dx > canvas.width-ballRadius || x + dx< ballRadius) {
    x += 0;
    draw();
    clear();
    draw();  } else{
    x += dx;
    draw();
    clear();
    draw();  }
}
function execute(){
  var textarea = document.getElementById("input");
  var arrayOfLines = textarea.value.split("\n");
  var countUp = 0;
  var countDown = 0;
  var countLeft = 0;
  var countRight = 0;
  console.log(arrayOfLines);
  console.log(textarea.value);

  //
  for(i = 0; i< arrayOfLines.length; i++){
    if(arrayOfLines[i] === "up" ){
      countUp++;
    }
    if(arrayOfLines[i] === "down" ){
      countDown++;
    }
    if(arrayOfLines[i] === "left" ){
      countLeft++;
    }
    if(arrayOfLines[i] === "right" ){
      countRight++;
    }
  }

  //
  for(j = 0; j< countUp; j++) {
    up();
  }

  //
  for(j = 0; j< countDown; j++) {
    down();
  }

  //
  for(j = 0; j< countLeft; j++) {
    left();
  }

  //
  for(j = 0; j< countRight; j++) {
    right();
  }


  alert(textarea.value);

  // for(i = 0; i < 5; i++){
  //   alert(i);
  //    if(arrayOfLines[i] == ".up"){
  //     up();
  // }
 }


draw();






}

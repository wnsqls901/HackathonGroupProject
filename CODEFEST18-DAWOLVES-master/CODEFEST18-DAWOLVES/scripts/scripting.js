window.onload = function() {


 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 document.getElementById("reset").addEventListener("click", reset);
 document.getElementById("execute").addEventListener("click",execute);
 document.getElementById("up").addEventListener("click", up);
 document.getElementById("down").addEventListener("click", down);
 document.getElementById("left").addEventListener("click", left);
 document.getElementById("right").addEventListener("click", right);

 var pic = new Image();

 var x = 50;
 var y = 380;

 var ballRadius = 15;

 var dx = 97;
 var dy = 85;

var arrayOfLines = null;
var index = 0;

function destination() {
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(682.5, 0, 97, 84);
  ctx.stroke();
}

function drawPic(){
  pic.src = "images/turtle.jpg";
  pic.onload = function(){
  ctx.drawImage(pic,x -34,y - 40);
  }

}

function draw(){
  clear();
  drawGrid();
  ctx.beginPath();
  ctx.arc(x,y,ballRadius,0,Math.PI *2);
  drawPic();
  ctx.fillStyle = "blue";
  ctx.fill();

  destination();
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
  } else {
    y -= dy;
  }
  draw();
  clear();
  draw();
}

function down(){
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    y += 0;
  }
     else {
    y += dy;
 }
 draw();
 clear();
 draw();
}

function left(){
  if(x - dx> canvas.width-ballRadius || x - dx < ballRadius)
   {
    x -= 0;
    } else
    {
      x -= dx;
  }
  draw();
  clear();
  draw();
}

function right(){
  if(x + dx > canvas.width-ballRadius || x + dx< ballRadius) {
    x += 0;
    }
     else{
    x += dx;
  }
  draw();
  clear();
  draw();

}
function reset() {
  x = 50;
  y = 380;

  draw();
  clear();
  draw();
}
function execute(){
  var textarea = document.getElementById("input");
  arrayOfLines = textarea.value.split("\n");
  var countUp = 0;
  var countDown = 0;
  var countLeft = 0;
  var countRight = 0;
  console.log(arrayOfLines);
  console.log(textarea.value);


  // if(arrayOfLines.isEmpty())
  if(arrayOfLines.length != 0)
  {
    index = 0;
    drawOnce();
  }

 }

function drawOnce()
{
  var command = arrayOfLines[index];
  index+=1;
  evaluateCommand(command);
  if(arrayOfLines.length > index)
  {
    setTimeout(drawOnce, 500);
  }

}

function evaluateCommand(command)
{
  if(command === ".up()")
  {
    up();
  } else if(command === ".down()")
  {
    down();
  } else if(command === ".left()")
  {
    left();
  } else if(command === ".right()")
  {
    right();
  }
  //Finish Alert
  if (x == 682.5 && y == 0) {
    alert("Finished!");
  }
}

draw();






}

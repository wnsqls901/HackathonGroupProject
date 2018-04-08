window.onload = function() {


 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 document.getElementById("reset").addEventListener("click", reset);
 document.getElementById("execute").addEventListener("click",execute);
 document.getElementById("up").addEventListener("click", up);
 document.getElementById("down").addEventListener("click", down);
 document.getElementById("left").addEventListener("click", left);
 document.getElementById("right").addEventListener("click", right);

 var player = new Image();
 var enemy = new Image();

 var enemyTurnCounter = 0

 var hitWall = false;

 var x = 50;
 var y = 380;

 var enemyX = 621;
 var enemyY = 50;

 var movX = 147;
 var movY = 295;
 var confDirec = 0;

 var destX = 682.5;
 var destY = 0;

 var ballRadius = 15;

 var dx = 97;
 var dy = 85;

var arrayOfLines = null;
var index = 0;

function destination() {
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(destX, destY, 97, 84);
  ctx.stroke();
}
function movableObject() {
  if (x === movX && y === movY) {
    if (confDirec === 1) {
      if(movY - dy > canvas.height-ballRadius || movY - dy < ballRadius) {
        movY -= 0;
        down();
      } else {
        movY -= dy;
      }
    } else if (confDirec === 2) {
      if(movY + dy > canvas.height-ballRadius || movY + dy < ballRadius) {
        movY += 0;
        up();
      } else {
        movY += dy;
      }
    } else if (confDirec === 3) {
        if(movX - dx > canvas.width-ballRadius || movX - dx < ballRadius) {
          movX -= 0;
          right();
        } else {
          movX -= dx;
        }
    } else if (confDirec === 4) {
          if(movX + dx > canvas.width-ballRadius || movX + dx < ballRadius) {
            movX += 0;
            left();
          } else {
            movX += dx;
          }
    }
  }
  if (movX === 729 && movY === 40) {
      alert("fucked up");
      resetMovableObject();
      reset();
  }
  ctx.arc(movX ,movY,ballRadius,0,Math.PI *2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}

function drawCharacter(characterType,imageName,xPosition,yPosition){
  ctx.arc(xPosition,yPosition,ballRadius,0,Math.PI *2);
  ctx.fillStyle = "blue";
  ctx.fill();
  drawPic(characterType,imageName,xPosition,yPosition);
}

function drawPic(characterType, imageName,xPosition,yPosition){
  characterType.src = "images/" + imageName;
  characterType.onload = function(){
  ctx.drawImage(characterType,xPosition -34,yPosition - 40);
  }

}

function enemyDown(){
  if(enemyY + dy > canvas.height-ballRadius || enemyY + dy < ballRadius) {
    console.log("hello");
    enemyY += 0;
    hitWall = true;


  }
     else {
    enemyY += dy;
 }
 console.log(enemyY + dy  );
 console.log(canvas.height-ballRadius);

}

function enemyUp(){
  if(enemyY - dy > canvas.height-ballRadius || enemyY - dy < ballRadius) {
    enemyY -= 0;

  }
     else {
    enemyY -= dy;
 }


}

function enemyMovement(){

  console.log(hitWall);
  if(enemyTurnCounter != 4 || hitWall ){
    enemyDown();
    enemyTurnCounter +=1;
  }
  else if(enemyTurnCounter != 0) {
        enemyUp();
        enemyTurnCounter -=1;
  }


}

function draw(){
  clear();
  drawGrid();
  ctx.beginPath();
  drawCharacter(player,"turtle.jpg",x,y);
  drawCharacter(enemy,"croc1.jpg",enemyX,enemyY);
  enemyMovement();

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

  confDirec = 1;
  draw();
  clear();
  draw();
  evaluateFinish(682.5, 69);
}

function down(){
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    y += 0;
  }
     else {
    y += dy;
 }

 confDirec = 2;
 draw();
 clear();
 draw();
 evaluateFinish(682.5, 69);
}

function left(){
  if(x - dx> canvas.width-ballRadius || x - dx < ballRadius)
   {
    x -= 0;
    } else
    {
      x -= dx;
  }
  confDirec = 3;
  draw();
  clear();
  draw();
  evaluateFinish(682.5, 69);
}

function right(){
  if(x + dx > canvas.width-ballRadius || x + dx< ballRadius) {
    x += 0;
    }
     else{
    x += dx;
  }
  confDirec = 4;
  draw();
  clear();
  draw();
  evaluateFinish(682.5, 69);
}
function reset() {
  x = 50;
  y = 380;

  draw();
  clear();
  draw();
}
function resetMovableObject() {
  movX = 147;
  movY = 295;

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
  evaluateFinish(682.5, 69);
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
}

function evaluateFinish(finishX, finishY)
{
  if (x >= finishX && y <= finishY) {
    alert("Good Job! You have finished!");
    window.location.href = "stage2.html";
  }
}

draw();

}

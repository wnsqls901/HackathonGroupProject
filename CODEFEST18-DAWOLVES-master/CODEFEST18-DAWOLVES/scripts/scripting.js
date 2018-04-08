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

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
function execute(){
  var textarea = document.getElementById("input");
  var arrayOfLines = textarea.value.split("\n");
  var count = 0
  console.log(arrayOfLines);
  console.log(textarea.value);

  //
  while(count != arrayOfLines.length){
    if(arrayOfLines[count] === "up"){
      up();
      count +=1;
    }else if (arrayOfLines[count] === "down") {
      down();


    }else if (arrayOfLines[count] === "right") {
      right();

    }
    wait(1000);
    // switch(arrayOfLines[count]){
    //   case "up":
    //    up();
    //    count += 1
    //
    //    break;
    //   case "right":
    //    right();
    //    count += 1
    //    break;
    //   default:
    //     draw();
    //     count += 1
    //
    // }


  }
  // for(i = 0; i<= arrayOfLines.length; i++){



    // switch(arrayOfLines[i]){
    //   case "up":
    //    up();
    //    break;
    //   case "right":
    //    right();
    //    break;
    //   default:
    //     draw();
    //     console.log([i]);
    // }
    //if(arrayOfLines[i] === "up" ){
    //   countUp++;
    // }
    // if(arrayOfLines[i] === "down" ){
    //   countDown++;
    // }
    // if(arrayOfLines[i] === "left" ){
    //   countLeft++;
    // }
    // if(arrayOfLines[i] === "right" ){
    //   countRight++;
    // }






  // for(i = 0; i < 5; i++){
  //   alert(i);
  //    if(arrayOfLines[i] == ".up"){
  //     up();
  // }
 }


draw();






}

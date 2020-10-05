var movingRect,fixedRect;



function setup() {
  
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 50, 80);
  fixedRect = createSprite(400,200,80,30);
 
  movingRect.debug = false;
  fixedRect.debug = false;
}

function draw() {
  background("lightGray");  
  movingRect.x =mouseX;
  movingRect.y =mouseY;  
    
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y - fixedRect.y <= fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.y - movingRect.y <= fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
   



  //console.log(fixedRect.width/2 + movingRect.width/2)
  console.log( movingRect.x - fixedRect.x)
  drawSprites();
}
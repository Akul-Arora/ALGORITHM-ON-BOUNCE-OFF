var fixedRect, movingRect;
var sprite1,sprite2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 // movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;

 sprite1=createSprite(200,300,40,40);
 sprite2=createSprite(1000,300,40,40);
sprite1.shapeColor="white";
sprite2.shapeColor="red";
sprite1.velocityX=10;
sprite2.velocityX=-10;

}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
 bounceOff(sprite1,sprite2);
 if (isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="red";
 }else{fixedRect.shapeColor="green";
      movingRect.shapeColor="green";}
  drawSprites();
}
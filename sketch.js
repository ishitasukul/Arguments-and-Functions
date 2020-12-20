var fixedRect, movingRect;
var gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  gameobject1=createSprite(300,700,70,90);
  gameobject1.velocityY=-4

  gameobject2=createSprite(300,50,80,60);
  gameobject2.velocityY=4

  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,gameobject2)){
  movingRect.shapeColor = "red";
  gameobject2.shapeColor = "red";
 } else {
  movingRect.shapeColor = "green";
  gameobject2.shapeColor = "green";
 }

 bounceOff(gameobject1,gameobject2);
  
  drawSprites();
}






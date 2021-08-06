var ship,ship_moving,edges;
var seaImage,sea;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimage = loadAnimation("sea.png");

}

function setup(){
  createCanvas(400,400);
  //creating ship
  ship=createSprite(150,160,20,50);
  ship.addAnimation("moving",ship_moving);
  ship.scale=0.5;
 
 
 sea=createSprite(200,280,400,20);
 sea.addImage(seaImage);
 sea.velocityX=-4;
}

function draw() {      
  background("blue");
  drawSprites();
 
   
  if(seaImage.x<0){
    sea.x=sea.width/2;
  }
      
    
    
}
   
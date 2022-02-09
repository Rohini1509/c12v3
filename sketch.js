var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimg







function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");

  cloudimg= loadImage("cloud.png")
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,170,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(300,180,600,20);
  ground.addImage("ground",groundImage);
 ground.x = ground.width /2;
  ground.velocityX = -4;

  console.log(random(1,5))
  
  //creating invisible ground
  invisibleGround = createSprite(300,190,600,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background(255);

  
  console.log(trex.y)
  
  // jump when the space key is pressed
  if(keyDown("space") && trex.y>150) {
    trex.velocityY = -14;
  }
  
  trex.velocityY = trex.velocityY + 0.8
//calling the function

  spawnClouds()

  
 
if(ground.x<0)
{

ground.x= ground.width/2

}
  
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  
  drawSprites();
  
}


function spawnClouds()
{

  if(World.frameCount%60===0)
  {

var cloud= createSprite(610,130,10,10)
cloud.addImage(cloudimg)

var rand = random(100,130)
cloud.y=rand

cloud.velocityX= -2;
cloud.scale=0.5

cloud.depth=trex.depth
trex.depth=trex.depth+1


  }

}


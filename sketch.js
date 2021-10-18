var player1,player2;
var obstacles;
var shooter1Img,shooter2Img,rocketimg,rotateimg;
var ground,ground2;
var gameState = "play"

function preload(){
 rocketimg= loadImage("rocket.png");
 rotateimg= loadImage("rotate.png")
}




function setup(){
  createCanvas(1200,600);

  player1= createSprite(300,470);
  player1.addImage("rocket",rocketimg);
  player1.scale= 0.2;

  player2 = createSprite(300,140);
  player2.addImage("rotate",rotateimg);
  player2.scale=0.2;

  ground = createSprite(400,550,2000,10);
  ground2 = createSprite(200,240,2000,10);
}




function draw(){
  background(0);
  if(gameState === "play"){
    if(keyDown("left_arrow")){
      player1.x = player1.x-5;
    }

    if(keyDown("right_arrow")){
      player1.x = player1.x +5;
    }
  }
  drawSprites();
}





































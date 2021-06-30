var Matt,Matt1, Matt2, MattImg,MattImg2, MattBlocking, MattAnimation;
var bg;
var MattPunching;
var Life1=3, Life2=3;
var reset, resetImg

function preload(){
  MattImg = loadImage("Images/Matt.png");
  MattImg2 = loadImage("Images/Matt.png");
  bg = loadImage("Images/stadium.jpg")
  MattAnimation=loadImage("Images/Matt-punching.png");
  MattBlocking=loadImage("Images/Matt-blocking.png");
  resetImg=loadImage("Images/reload.png");
}

function setup(){
  createCanvas(600,600);
  Matt = createSprite(150,400,10,10);
  Matt.addImage("Matt",MattImg)
  Matt.scale=.7
  Matt.debug=true;
  Matt2 = createSprite(450,400,10,10);
  Matt2.addImage("Matt2",MattImg2)
  Matt2.scale=.7
  Matt2.debug=true;
  reset=createSprite(300,330,20,20);
  reset.addImage("reset",resetImg);
  reset.scale=.2
  reset.visible=false;
  
}

function draw(){
  background(bg);
  if(keyWentDown("w"))
  {
    
   Matt.addImage("Matt",MattAnimation)
  }
 else if(keyDown("s")){
    Matt.addImage("Matt",MattBlocking)

  }
 if(keyWentDown("a")){
   
   Matt2.velocityX=-5;
  
   
 }
 if(keyWentDown("d")){
   
  Matt2.velocityX=5;
 
  
}
 if(Matt2.isTouching(Matt)){
   Matt2.addImage("Matt2",MattBlocking);
  Life1-=1
  Matt2.x=450;
  Matt2.y=400

 }else{
  
 }
  if(Life1===0||Life2===0){
    Matt2.velocityX=0;
    Matt2.velocityY=0;
    stroke("red");
    strokeWeight(5);
    fill("black");
    textSize(40);
    text("GAME OVER", 200, 300)
    reset.visible=true;
  }
  if(mousePressedOver(reset)){
    Life1=3
    Matt2.velocityX=-5;
    Matt2.velocityY=0;
    reset.visible=false;
  }
  drawSprites();
  strokeWeight(1);
  textSize(30)
  stroke("green")
  fill("green")
  text("Lives:"+Life1,90,70);
  stroke("red")
  fill("red")
  text("Lives:"+Life2,420,70);

  
}

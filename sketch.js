var iss,issimg,spaceCraft;
var hasDocked;
var scimg1,scimg2,scimg3,spaceBg;
var hasDocked = false;

function preload(){
issimg = loadImage("images/iss.png");
spaceBg = loadImage("images/spacebg.jpg");
scimg1 = loadImage("images/spacecraft1.png")
scimg2 = loadImage("images/spacecraft2.png");
scimg3 = loadImage("images/spacecraft3.png");
scimg4 = loadImage("images/spacecraft4.png");

}

function setup() {
  createCanvas(1200,600);
  

  iss = createSprite(430,250);
  iss.addImage(issimg);
  iss.scale =0.55

  spaceCraft = createSprite(130,130);
  spaceCraft.addImage(scimg1);
  spaceCraft.scale =0.10

  iss.setCollider("rectangle",0,0,50,50)
  iss.debug = false
 }

function draw() {
  background(spaceBg);
  
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1)

    if(keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y -2;
    }

    if(keyDown("DOWN_ARROW")){
      spaceCraft.y = spaceCraft.y +2;
      spaceCraft.addImage(scimg2);
    }

    if(keyDown("LEFT_ARROW")){
      spaceCraft.x = spaceCraft.x -2
      spaceCraft.addImage(scimg3)
     
    }

    if(keyDown("RIGHT_ARROW")){
      spaceCraft.x = spaceCraft.x +2
      spaceCraft.addImage(scimg4)
     
    }
  
    }
      if(spaceCraft.isTouching(iss)){
       hasDocked = true;
      fill("white")
      strokeWeight(15)
      textSize(55)
      text("Docking  Successfully",430,530)
          }
   
  drawSprites();
}
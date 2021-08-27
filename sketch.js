var iss, spacecraft;
 var bg, issimg, scimg; 
 var hasDocked = false;

 function preload(){
   bg= loadImage("Docking-undocking/spacebg.jpg")
   issimg= loadImage("Docking-undocking/iss.png")
   scimg1= loadImage("Docking-undocking/spacecraft1.png")
   scimg2= loadImage("Docking-undocking/spacecraft2.png")
   scimg3= loadImage("Docking-undocking/spacecraft3.png")
   scimg4= loadImage("Docking-undocking/spacecraft4.png")
 }


function setup() {
  createCanvas(800,400);
 spacecraft=createSprite(285, 240);
 spacecraft.addImage(scimg1)
spacecraft.scale=0.15

iss=createSprite(330, 130);
iss.addImage(sissimg)
iss.scale=0.25

}

function draw() {
  background(bg); 
  spacecraft.addImage(scimg1)
  if(! hasDocked){
    spacecraft.x= spacecraft.x+random(-1,1)

  }
   
  if(keyDown(UP_ARROW)){
    spacecraft.y=spacecraft.y-2
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(scimg1)
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.x=spacecraft.x-1
    spacecraft.addImage(scimg3)
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.x=spacecraft.x+1
    spacecraft.addImage(scimg2)
  }
if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
  hasDocked=true
  textSize(30);
  fill ("green")
  text("Docking nal sucessful",200,400)
} 

  drawSprites();
}

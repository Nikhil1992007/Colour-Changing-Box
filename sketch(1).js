var canvas,edges,music;
var s1,s2,s3,s4,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1=createSprite(100,575,180,50);
  s1.shapeColor="red";
  
  s2=createSprite(300,575,180,50);
  s2.shapeColor="green";
  
  s3=createSprite(500,575,180,50);
  s3.shapeColor="blue";
  
  s4=createSprite(700,575,180,50);
  s4.shapeColor="yellow";


    //create box sprite and give velocity
  box=createSprite(400,300,80,80);
  box.shapeColor="black";
box.velocityX=3;
  box.velocityY=-5;
}

function draw() {
 /* box.x=World.mouseX;
  box.y=World.mouseY;*/
  
    
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
  box.bounceOff(edges);
 


    //add condition to check if box touching surface and make it box
  if(s1.isTouching(box)){
    box.shapeColor="red";
    
  }
   if(s2.isTouching(box)){
    box.shapeColor="green";
     box.velocityX=0;
     box.velocityY=0;
      music.stop();
   
  }
  
   if(s3.isTouching(box)){
    box.shapeColor="blue";
      
  }
   if(s4.isTouching(box)){
    box.shapeColor="yellow";
      music.play();
  }
   box.bounceOff(s1);
  box.bounceOff(s2);
  box.bounceOff(s3);
  box.bounceOff(s4);
  
  if(keyDown("space")&&box.y>=500){
    box.velocityX=3;
  box.velocityY=-5;
    box.x=400;
    box.y=300;
      box.shapeColor="black";
  }
  
  
  drawSprites();
 
  
 textSize(25);
  text("IF BALL IS STOPED PRESS SPACE TO RESTART",150,200);
      
}

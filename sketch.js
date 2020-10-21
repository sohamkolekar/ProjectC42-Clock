var hr,mn,sc,hrAngle,mnAngle,scAngle;


function setup() {
  createCanvas(1200,1200);
 
  createSprite(800, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  console.log(World.mouseX+"x");
  console.log(World.mouseY+"y");
  hr=hour();
  mn=minute();
  sc=second();
  angleMode(DEGREES)

  push()
  scAngle=map(sc,0,60,-90,270);
  translate(600,600);
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  
  
  pop();

  push()
  mnAngle=map(mn,0,60,-90,270);
  translate(600,600);
  rotate(mnAngle);
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,80,0);
  
  
  pop();

  push()
  hrAngle=map(hr,0,12,-90,270);
  translate(600,600);
  rotate(hrAngle);
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0);
  
  pop();

  push();
  noFill();
  stroke(255,0,0)
  strokeWeight(10);
  arc(600,600,200,200,-90,scAngle)
  pop();

  push();
  noFill();
  stroke(0,255,0)
  strokeWeight(10);
  arc(600,600,160,160,-90,mnAngle)
  pop();

  push();
  noFill();
  stroke(0,0,255)
  strokeWeight(10);
  arc(600,600,100,100,-90,hrAngle)
  pop();

  push();
  noFill()
  strokeWeight(15)
  arc(600,600,300,300,0,0)
  pop();

  drawSprites();
  textSize(50);
  text("hour:"+hr+"\n"+"minute:"+mn+"\n"+"seconds:"+sc,500,200);
}
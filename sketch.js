var thichness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
 
  thickness=random(22,83);

  bullet=createSprite(1200, 200, 50, 50);
}

function draw() {
  background(0); 

  
  drawSprites();

  }
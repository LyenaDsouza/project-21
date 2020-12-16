var bullet;
var wall,wallImage;
var speed,weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  
  bullet=createSprite(50,200,100,20);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  wall.scale=0.5;
  wall.shapeColor=color(80,80,80);
}


function draw() {
  background("blue"); 

  if(collided(bullet,wall))
  {
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  
  if(damage<10)
  {
    wall.shapeColor="green";
  }
  if(damage>10)
  {
    wall.shapeColor="red";
  }
 if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500
    if(deformation>180)
    {
      bullet.shapeColor=color(250,0,0);
    }

    if(deformation<180 && deformation>100)
    {

      bullet.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }   

  drawSprites();
}
function collided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
 return false;
}
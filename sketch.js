var fixed, moving; 
var car1,car2;

function setup() 
{ 
  createCanvas(1200,400); 

  fixed=createSprite(300,200,60,100); 
  moving=createSprite(1000,200,100,60); 
  fixed.shapeColor="green"; 
  moving.shapeColor="green"; 

  car1=createSprite(200,350,50,50);
  car2=createSprite(1000,350,50,50);
  car1.shapeColor="cyan";
  car2.shapeColor="yellow";
  car1.velocityX=3;
  car2.velocityX=-3;
} 
function draw() 
{ 
  background(0); 
  console.log(moving.x-fixed.x);
  
  moving.x=World.mouseX; 
  moving.y=World.mouseY;

 if(moving.x-fixed.x <= fixed.width/2 + moving.width/2 &&
   fixed.x-moving.x <= fixed.width/2 + moving.width/2 && 
   fixed.y-moving.y<=fixed.height/2 + moving.height/2 &&
   moving.y-fixed.y<=fixed.height/2 + moving.height/2 )
   {
      fixed.shapeColor="red";
       moving.shapeColor="red";
    }

  else { fixed.shapeColor="green";
        moving.shapeColor="green";
       }

       if(car1.x-car2.x <= car1.width/2 + car2.width/2 &&
        car2.x-car1.x <= car2.width/2 + car1.width/2 )
        {
          car1.velocityX=car1.velocityX*-1;
          car2.velocityX=car2.velocityX*-1;
        }

         drawSprites();
         }
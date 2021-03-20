var helicopterIMG, helicopterIMG2, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bgImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	helicopterIMG2=loadImage("helicopter2.png")
	packageIMG=loadImage("package.png")
	bgImg = loadImage("bgImg.png")
}

function setup() {
	createCanvas(810, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(80, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5;

	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color("grey")


	engine = Engine.create();
	world = engine.world;
	side1= new Ground(400,675,200,20);
	side2= new Ground(300,644,20,100);
	side3= new Ground(500,644,20,100);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  side1.display();
  side2.display();
  side3.display();
 
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x+=20;
		Matter.Body.translate(packageBody,{x:20,y:0});
		helicopterSprite.addImage(helicopterIMG2)
	}
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x-=20;
		Matter.Body.translate(packageBody,{x:-20,y:0});
		helicopterSprite.addImage(helicopterIMG)
	}

 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}

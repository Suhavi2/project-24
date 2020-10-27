
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3,paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("white")

	rect1=new Dustbin(330,600,20,140);
	rect2=new Dustbin(470,600,20,140);
	rect3= new Dustbin(400,650,140,20);
	paper=new Paper(200,450,40);

	//creating a ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}



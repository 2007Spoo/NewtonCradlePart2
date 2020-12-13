
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var penduleum, sling;
//var ground;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/2);


	engine = Engine.create();
	world = engine.world;

	penduleum= new Penduleum(200,100,255);
	sling= new Sling(penduleum.body, {x: 200, y:50})
	penduleum1= new Penduleum(260,100,255);
	sling1= new Sling(penduleum1.body, {x: 260, y:50})
	penduleum2= new Penduleum(320,100,255);
	sling2= new Sling(penduleum2.body, {x: 320, y:50})
	penduleum3= new Penduleum(380,100,255);
	sling3= new Sling(penduleum3.body, {x: 380, y:50})
	penduleum4= new Penduleum(440,100,255);
    sling4= new Sling(penduleum4.body, {x: 440, y:50})
	//ground= new Ground(200,350,800,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  penduleum.display();
  //ground.display();
  sling.display();
  penduleum1.display();
  sling1.display();
  penduleum2.display();
  sling2.display();
  penduleum3.display();
  sling3.display();
  penduleum4.display();
  sling4.display();
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(penduleum.body, {x: mouseX, y: mouseY})
}


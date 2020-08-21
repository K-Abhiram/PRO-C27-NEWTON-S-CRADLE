
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4,bobObject5,roof;
var rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(300,500,50,50);
	bobObject2 = new Bob(350,500,50,50);
	bobObject3 = new Bob(400,500,50,50);
	bobObject4 = new Bob(450,500,50,50);
	bobObject5 = new Bob(500,500,50,50);
	roof=new Roof(400,200,300,40);
	rope1=new Rope(bobObject1.body,{x:300,y:200},bobObject1.diameter*2,0);
	rope2=new Rope(bobObject2.body,{x:350,y:200},bobObject1.diameter*2,0);
	rope3=new Rope(bobObject3.body,{x:400,y:200},bobObject1.diameter*2,0);
	rope4=new Rope(bobObject4.body,{x:450,y:200},bobObject1.diameter*2,0);
	rope5=new Rope(bobObject5.body,{x:500,y:200},bobObject1.diameter*2,0);




	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  rope1.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope2.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();
 
 
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(bobObject1.body,false);
		bobObject1.restitution=0;		
		
	 }
   }



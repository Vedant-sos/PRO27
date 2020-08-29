
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof,bob1;
var bdropImg;

function preload()
{
  
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Ceiling(500,300,300,20);
	bob1=new Bob(380,500);
  rope1=new Rope(bob1.body,roof.body,-2*bob1.radius,0);
	bob2=new Bob(440,500);
	rope2=new Rope(bob2.body,roof.body,-bob2.radius,0);
	bob3=new Bob(500,500)
	rope3=new Rope(bob3.body,roof.body,0,0);
	bob4=new Bob(560,500);
	rope4=new Rope(bob4.body,roof.body,bob4.radius,0);
	bob5=new Bob(620,500);
	rope5=new Rope(bob5.body,roof.body,2*bob5.radius,0);

	
	
  
}


function draw() {
  //rectMode(CENTER);
  background(211,211,211);
  Engine.update(engine);
  //console.log(bob1);

  keyPressed();

  drawSprites();
  roof.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();;
 
}

function keyPressed(){
  if(keyCode===UP_ARROW && bob1.body.position.y>=500){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1500,y:-1500});
  }
}




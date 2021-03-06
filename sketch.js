
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	fill("lime");
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	fill("cyan");
	//Create the Bodies Here.
	bob1=new bob(300,600,40);
	bob2=new bob(340,600,40);
	bob3=new bob(380,600,40);
	bob4=new bob(420,600,40);
	bob5=new bob(460,600,40);

	roof=new BaseClass(400,250,230,20);

	
	
	rope1=new rope(bob1.body,roof.body,-80,0);

	rope2=new rope(bob2.body,roof.body,-40,0);
	

	rope3=new rope(bob3.body,roof.body,0,0);
	
	rope4=new rope(bob4.body,roof.body,40,0);
  
    rope5=new rope(bob5.body,roof.body,80,0);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85});
	   
	 }
   }





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ball1,ball2,ball3,ball4,ball5;
var roof;
//var rope1,rope2,rope3,rope4,rope5,rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,200,20)
	ball1 = new Ball(400,400,36)
	ball2 = new Ball(330,400,36)
	ball3 = new Ball(365,400,36)
	ball4 = new Ball(435,400,36)
	ball5 = new Ball(470,400,36)
	rope = new Rope(ball1,roof)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}




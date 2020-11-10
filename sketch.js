
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	paper = new Paper(200,200,20);

	engine = Engine.create();
	World = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  paper.diplay();

  drawSprites();
 
}




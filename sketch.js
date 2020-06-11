var helicopterIMG, helicopterSprite, packageSprite,paperIMG;
var paperBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin1,dustbin2,dustbin3;

function preload() {

}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;




	//Create a Ground
	ground = Bodies.rectangle(width/2, 500, 800, 20, {isStatic:true} );
 	World.add(world, ground);

paper = new Paper(100,200,20)

  dustbin1 = new Dustbin(500,480,100,20);
  dustbin2 = new Dustbin(440,440,20,100);
  dustbin3 = new Dustbin(560,440,20,100);
}


function draw() {

Engine.update(engine);
  
  background(255);
  
  
    
  	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,800,20);
	
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	paper.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:45,y:-45});
		//console.log(paperBody.position)
	}
}



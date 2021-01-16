
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{																							
	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//ground 
	g = new Ground(500,590,1000,20);

	//boy
	boy = new Boy(250,500,400,400);

	//tree
	tree = new Tree(800,350,500,500);

	//mangoes 
	mango1 = new Mango(800,250,60);
	mango2 = new Mango(900,220,60);
	mango3 = new Mango(700,270,60);
	mango4 = new Mango(720,200,60);
	mango5 = new Mango(800,170,60);
	mango6 = new Mango(900,300,60);
	mango7 = new Mango(730,320,60);
	mango8 = new Mango(970,290,60);

	//stone
	stone = new Stone(150,400,50);

	//slingshot
	sling = new Slingshot(stone.body, {x:150,y:400});

    mangoGroup = new Group();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  g.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  sling.display();
  keyPressed();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectCollision(lstone,lmango) {
  mangoPosition = lmango.body.position;
  stonePosition = lstone.body.position;

  distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);

  if (distance < lmango.radius + lmango.radius) {
	  Matter.Body.setStatic(lmango.body,false);
  }
}

 function keyPressed() {
	 if (keyDown(UP_ARROW)) {
		 Matter.Body.setPosition(stone.body,{x:150,y:400});
	 }
 }
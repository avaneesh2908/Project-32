const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonImage;
var bg="orange";
var score=0;

function preload() {
    polygonImage=loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(760,205,200,20);
    stand2 = new Ground(390,305,250,20);

    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    block16 = new Box(390,155,30,40);
    block17 = new Box(700,175,30,40);
    block18 = new Box(730,175,30,40);
    block19 = new Box(760,175,30,40);
    block20 = new Box(790,175,30,40);
    block21 = new Box(820,175,30,40);
    block22 = new Box(730,135,30,40);
    block23 = new Box(760,135,30,40);
    block24 = new Box(790,135,30,40);
    block25 = new Box(760,95,30,40);

 polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
    if(bg)
    background(bg);
    Engine.update(engine);

    stand1.display();
    stand2.display();

    fill("blue");
    block1.display();
    fill("blue");
    block2.display();
    fill("blue");
    block3.display();
    fill("blue");
    block4.display();
    fill("blue");
    block5.display();
    fill("blue");
    block6.display();
    fill("blue");
    block7.display();
    fill("pink");
    block8.display();
    fill("pink");
    block9.display();
    fill("pink");
    block10.display();
    fill("pink");
    block11.display();
    fill("pink");
    block12.display();
    fill("green");
    block13.display();
    fill("green");
    block14.display();
    fill("green");
    block15.display();
    fill("black");
    block16.display();
    fill("blue");
    block17.display();
    fill("blue");
    block18.display();
    fill("blue");
    block19.display();
    fill("blue");
    block20.display();
    fill("blue");
    block21.display();
    fill("pink");
    block22.display();
    fill("pink");
    block23.display();
    fill("pink");
    block24.display();
    fill("green");
    block25.display();
    
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

    imageMode(CENTER)
    image(polygonImage ,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();

    getBackground();

    fill("white");
    textSize(35);
    text("Score : "+score,750,40);

    fill("white");
    textSize(30);
    text("Drag the polygon to hit the blacks",150,50);

    fill("white");
    textSize(30);
    text("Press space to get a second chance",400,350);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed() {
    if(keyCode == 32) {
        slingShot.attach(this.polygon);
    }
}

async function getBackground() {
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON= await response.json();
    var dateTime=responseJSON.datetime;
    var hour=dateTime.slice(11,13);
    if(hour >= 06 && hour<= 18) {
        bg="orange";
    }
    else {
        bg="blue";
    }
}
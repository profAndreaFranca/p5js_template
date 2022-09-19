const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world
var angle = 20
var bgImg;
var ground, tower, towerImg;



function preload() {
  bgImg = loadImage("./assets/background.gif");

  towerImg = loadImage("./assets/tower.png")


}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0,height-1,width*2,1,options)
  World.add(world,ground)

  tower = Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)

}

function draw() {
  background(189);
  image(bgImg,0,0,width,height)

  Engine.update(engine);

  //exibindo o ground na tela
  rect(ground.position.x, ground.position.y,width*2,1)

  //exibindo a torre na tela
  push()
  imageMode(CENTER)
  image(towerImg,tower.position.x, tower.position.y,160,310)
  pop()

  text("X: " + mouseX + " / " + "Y: " + mouseY, mouseX, mouseY)
}

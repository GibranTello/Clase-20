// Actividad de inicio PRO C20 Fundamentos de Motores Físicos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var ball;
var ground;
var rock
var wall

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var ground_options ={
    isStatic: true
  };
  var rock_options = {
    restitucion:0.80
  }

wall= Bodies.rectangle(300,200,200,20,ground_options);
World.add(world,wall);

   rock = Bodies.circle(300,10,20,rock_options);
    World.add(world,rock);
  


  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  console.log(ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw(){
  background(51);
  Engine.update(engine);
  fill("yellow")
  ellipse(ball.position.x,ball.position.y,20);
  fill("lightgreen")
  rect(ground.position.x,ground.position.y,400,20);
  fill("lightblue");
  ellipse(rock.position.x,rock.position.y,20);
  fill("red")
  rect(wall.position.x,wall.position.y,200,20);
}

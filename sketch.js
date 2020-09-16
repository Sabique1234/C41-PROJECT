const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var raindrops = [];
 var umbrella;

function setup() {
  engine = Engine.create();
  world = engine.world;
  canvas = createCanvas(400,800);
  umbrella = new Umbrella(180, 690, 225);

}

function draw() {
  background(0);
  umbrella.display(); 

  if(frameCount % 1 === 0){
    var raindrop = new Raindrops(random(0, windowWidth), -100,10);
    raindrops.push(raindrop);
  }

   for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(40);
    raindrops[i].velocityY=raindrops[i].velocityY+2;
    raindrops[i].display();
  }

  num=Math.round(map(random(),0,1,1,6));
  console.log(num);

}

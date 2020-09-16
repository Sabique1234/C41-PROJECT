class Raindrops{
  constructor(x,y,radius){
      this.body = ellipse(x,y,radius);
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.velocityY  = random(2,5);
  }
   fall(speed){
      this.y +=speed;
  }

  display(){
      push();
      stroke(0,0,255);
      fill(0,0,255);
      ellipse(this.x, this.y, this.radius);
      pop();
  }
}
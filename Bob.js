class Bob {
    constructor(x,y,r) {
var options ={
   isStatic:false,
   friction:0.4,
   density:3,
  restitution:1.2,
}
   this.x = x;
   this.y = y;
   this.r = r; 
   this.body = Bodies.circle(this.x,this.y,this.r/2 ,options)
   
   World.add(world,this.body)
    }
    display() {

    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
    fill("grey");
    ellipseMode(CENTER)
    ellipse(0,0,this.r,this.r)
    pop()
   
   
 
    }
}
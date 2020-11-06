class Chain {
  constructor(bodyA,bodyB){
    var c_option = {
        bodyA : bird.body, 
        bodyB : constrainedLog.body,
        stiffness : 0.8,
        length : 40
    }
  this.chain = Constraint.create(c_option);  
  World.add(world,this.chain);
  }  
display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    stroke("black")
    strokeWeight(5);
    line(pointA.x, pointA.y, pointB.x, pointB.y)
}

}
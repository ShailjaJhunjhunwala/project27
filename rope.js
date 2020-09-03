class Rope{
    constructor(body1,body2,offsetX,offsetY){
        var options ={
            bodyA:body1,
            bodyB:body2,
            stifness:0.04,
            length:10
        }
        this.chain = Constraint.create(options)

        World.add(world,this.chain)
    }
display(){
   var pointA = this.chain.bodyA.position
   var pointB = this.chain.bodyB.position
   strokeWeight(3)
   line(pointA.x,pointA.y,pointB.x,pointB.y)
 }
}
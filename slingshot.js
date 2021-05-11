class SlingShot{
    constructor(a,b){
    this.sling=Matter.Constraint.create({bodyA:a,pointB:b,length:0.5,stiffness:0.2})
 World.add(world,this.sling)

    }
    display(){
        if(this.sling.bodyA!=null){
            var s=this.sling.bodyA.position
            var t=this.sling.pointB
            stroke("white")
           line(s.x,s.y,t.x,t.y)
        }
    }
}
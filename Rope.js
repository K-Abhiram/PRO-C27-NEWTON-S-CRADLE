class Rope{
    constructor(bodyA,pointB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
        bodyA:bodyA,
        pointB: pointB,
        pointB:{x:this.offsetX, y:this.offsetY},
        stiffness:0.04,
        length:10,
        }
    this.pointB=pointB;
    this.body = Constraint.create(options);
    World.add(world,this.body);
    }
    display(){
       var pointA=this.body.bodyA.position;
       var pointB=this.pointB;
        strokeWeight(10);
        stroke("white");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
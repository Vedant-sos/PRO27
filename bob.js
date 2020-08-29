class Bob{
    constructor(x,y){
        var options ={
            isStatic:false,
            friction:0,
            density:10,
            restitution:1
        }
        this.body=Bodies.circle(x,y,30,options);
        this.radius=60;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("green");
        ellipse(0,0,30,30);
        pop();
    }
}
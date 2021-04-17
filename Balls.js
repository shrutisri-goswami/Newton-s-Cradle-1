class Ball{
    constructor(x,y,width,height,angle){
        var options = {
            density:5,
            restitution: 0.9,
            friction: 1.0,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("pink")
        rotate(angle);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}
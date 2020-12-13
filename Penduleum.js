class Penduleum
{
    constructor(x,y,color)
{
    var options=
    {
      restitution: 1,
      slop: 1,
     // inertia: Infinity,
      friction: 0,
      frictionAir: 0.0
    }
    this.body = Bodies.rectangle(x,y,40,40,options)

    this.x=x;
    this.y=y;
    this.color = color;
    World.add(world, this.body);
}
display()
{
    var angle= this.body.anle;
    var pos= this.body.position;
    push()
    translate(pos.x, pos.y)
    rotate(angle);
    fill(this.color);
    ellipse(0,0,60,60)
    pop();
}

}
class Dustbin{
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
  
      //World.add(world, this.body);
  }
  
  
  display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rect(0, 0);
      pop();

      leftbox = {isStatic: true};

      centerbox = {isStatic: true};
      
      rightbox = {isStatic: true};
  
      }
}

 function draw(){
  leftbox = createSprite(300, 610, 10, 100);
	centerbox = createSprite(400,655,200,10);
	rightbox = createSprite(500,610,10,100);

	leftbox.shapeColor = "red";
	centerbox.shapeColor = "red";
  rightbox.shapeColor = "red";
  
  drawSprites();
  }
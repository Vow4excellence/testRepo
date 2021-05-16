 class Waste {
     constructor(x, y, radius){
        var wasteProperty = {restitution :1}
	
        this.waste = Bodies.circle(x, y, radius,wasteProperty)
        World.add(world, this.waste);
        this.radius = radius;     
      
     }
 
 show(){
   push();
    translate(this.waste.position.x,this.waste.position.y);
    
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius, this.radius);

    pop();
    }
    }

 
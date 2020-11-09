class Rectangle{

    constructor(x,y,width,height){
    
        this.rectangle=Bodies.rectangle(x,y,width,height,{isStatic:true});
       World.add(world,this.rectangle)
       this.w=width
       this.h=height
    }
    
    print(){
    rectMode(CENTER)
    fill("red")
    rect(this.rectangle.position.x,this.rectangle.position.y,this.w,this.h);
    
    }
    
    
    }
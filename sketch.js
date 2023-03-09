function setup() {
    createCanvas(700, 700);
    frameRate(10)
  }
  
  function draw() {
    
    
    background(0,5);
    
    if((mouseX>width/3) && (mouseX<width*2/3) && (mouseY>height/3) && (mouseY<height*2/3))
         {
            fill("red")
            square(mouseX,mouseY,20)
          }
        else
        {
          fill("white")
          rect(mouseX,mouseY,8,16)
        }
        
   
    
  }
  
  
  
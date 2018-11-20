var r, g, b; //declares variables for color.



function setup() {
  // put setup code here
    createCanvas(700,700); //sets size of the canvas in browser and displays in it.
    r = random(255); //assigns a value of a random number between 0 and 255 to r.
    g = 0;// this assigns value of 0 to g.
    b =random(255);

}

function draw() {
  // put drawing code here
    background(r, g, b); //sets background color.
}

function keyPressed(){ //when key is pressed r is assigned new random value.
      r = random(255);
      b = random(255);
      background(r,g,b);
    ellipse(mouseX,mouseY,100,100)
    
    if (keyCode ===  LEFT_ARROW){ //tests the valur pf key that is pressed
        r=0; //if the left arrow has been pressed reassignes values
        g=0;
        b=0;
        background(r, g,b);
    }
    if (keyCode === RIGHT_ARROW){
        r=255; //if the right  arrow has been pressed reassignes values
        g=255;
        b=255;
        background(r, g,b);
    }
    
    
 
    
    
}
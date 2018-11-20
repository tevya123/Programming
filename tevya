var randomColor; //lets the user know that everything will be any color.
//var r,g,b;

function setup() {
  createCanvas(700, 700);
  background(0,0,0);
}

function draw() {
    if (mouseIsPressed){ //press the mouse to see change.
    stroke(205, 234, 21);// changes the shapes outline
    fill(random(255), random(255), random(255));//The shape can be any color.
    //ellipse(255,255,100,100);
  }
else {
    stroke(21, 21, 234);
    //ellipse(355,355,100,100); 
}
    textSize(40); //changes the size.
    textFont("Bubble");//changes the text design.
    //fill(239, 9, 51);
    text("LETS GO CRAZY",200,300);//the text itself
    //textColor(239, 9, 51);
    
    ellipse(mouseX+6, mouseY, mouseX+6, mouseY); //the ellipse drawing.
    ellipse(mouseX, mouseY+6, mouseX, mouseY+6);//the ellipse drawing.
    
}

function keyPressed(){ //press any key to start over/clear screen.
    background(0,0,0);//sets the background black
    stroke(205, 234, 21);//sets the stroke color back to blue.
}


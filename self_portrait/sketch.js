function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(220);
	
    //head
    fill("#b35900")
    noStroke()
    rect(100, 90, 220, 200);
    
    //right eye
     fill("#1a0600")
    ellipse(220, 180, 40, 70);
    
     //left eye
   fill("#1a0600")
    ellipse(140, 180, 40, 70);
}
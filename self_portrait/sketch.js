function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(220);
	
    //head
    fill("#b35900");
    noStroke();
    rect(100, 90, 220, 200);
    
     //ear
    fill("#b35900");
    noStroke();
    rect(250, 160, 110, 80);
    
    //right eye
     fill("#1a0600");
    ellipse(220, 180, 40, 70);
    
     //left eye
   fill("#1a0600");
    ellipse(140, 180, 40, 70);
    
     //hair
    fill("#1a0600");
    noStroke();
    rect(80, 30, 270, 90);
    
      //maw
   fill("#a03120");

    ellipse(180, 250, 90, 20);
}
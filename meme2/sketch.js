var boi; // global
var yeet;

function preload() {
    boi = loadImage("boi.png");
    yeet = loadImage("yeet.png");
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    
    image(boi, 0, 0, width , height);
    //image(boi, width/2, 0, width/2, height);
    
    fill(255);
//    textAlign(CENTER, CENTER);
    textSize(50);
    textFont("Comic Sans MS");
    text("N E R O  S L A I N", 10, 70);
    
    text("5 HRS REMAIN ", 70, 470);
    
    	
	/* draw quandrant lines */
	strokeWeight(1);
	stroke("white");
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	fill("white");

	/* for each quandrant, determine of mouse 
		is inside bounds */	
	if (mouseX > width/2 && mouseY > height/2) {
		rect(width/2, height/2, width, height);
        image(yeet, 250, 250, width/2 , height/2);
	} else if (mouseX < width/2 && mouseY > height/2) {
		rect(0, height/2, width/2, height);
         image(yeet, 0, 250, width/2 , height/2);
	} else if (mouseX > width/2 && mouseY < height/2) {
		rect(width/2, 0, width, height/2);
        image(yeet, 250, 0, width/2 , height/2);
	} else {
		rect(0, 0, width/2, height/2);
        image(yeet, 0, 0, width/2 , height/2);
	}
}
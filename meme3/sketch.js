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
    
    	
function setup() {
	createCanvas(640, 360);
	background(220);
	rectMode(CENTER);
	
	ellipse(40, 40, 20);
	rect(60, 40, 20, 20);
	
	scale(2);
	ellipse(40, 40, 20);
	rect(60, 40, 20, 20);
	
	scale(3);
	ellipse(40, 40, 20);
	rect(60, 40, 20, 20);
}
var boi; // global

function preload() {
    boi = loadImage("boi.png");
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
}
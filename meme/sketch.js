var bird; // global

function preload() {
    bird = loadImage("bird.jpg");
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    
    image(bird, 0, 0, width/2, height);
    image(bird, width/2, 0, width/2, height);
    
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("Comic Sans MS");
    text("MEME", width/2, height/2);
}
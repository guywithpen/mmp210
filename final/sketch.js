
/*
    final project presentation slides
*/
var slide = 0;

var mordy1; 
var wave;
var sensor
function preload() {
//    mordy = loadImage("");
//    wave = loadImage("");
    mordy1 = loadImage("mordexample.jpg");
    sensor = loadImage("sensor.jpg");
}


function setup() {
    createCanvas(800, 500);
    textSize(60);
    textFont('monospace');
//    textAlign(CENTER, CENTER);
//    rectMode(CENTER);
}

function draw() {
    background(220);
    
    if (slide == 0) {
        text("Final Project Idea", 100, height/2);
    } else if (slide == 1) {
        textSize(30);
        text("Pressure sensor", 200, 100);
        
       image(sensor, 100, 170, 200, 200);
    } else if (slide == 2) {
        text("theme: Surfing", 200, 20);
        image(mordy1, 100, 100, 200, 250)
    } else if (slide == 3) {

        textSize(20);
        text("goal: To make an endless runner based on surfing.", 0, 20);
         text("I will use the sensor to make the character jump over waves.", 0, 60);
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}

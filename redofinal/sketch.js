var serial;
var portName = "COM8";
var sensorValue;
var boi; // global
var yeet;
var timbs;
var nero;
var physics = 160;


function preload() {
    boi = loadImage("boi.png");
    yeet = loadImage("yeet.png");
    timbs = loadImage("timbs.png");
    nero = loadImage("nero.png");
    mordy = loadImage("mordy.png");
    wave = loadImage("wave.png");
}

function setup() {
    createCanvas(500, 500);
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open(portName);
}

function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function draw() {
    background(0);
    console.log(sensorValue);
    //var r = random(60, 80);
    //var r2 = random(100, 110)

   // image(boi, 0, 0, width , height);
   // image(boi, width/2, 0, width/2, height);
    
    fill(255);
//    textAlign(CENTER, CENTER);
    textSize(50);
    textFont("Comic Sans MS");
    //text("N E R O  S L A I N", 10, 70);
    
    //text("5 HRS REMAIN ", 70, 470);
    
    image(wave, 200, 250, 300, 300);

    image(mordy, 10, physics, 300, 300);
    }
    	
// 	 draw quandrant lines 
// 	strokeWeight(1);
// 	stroke("white");
// 	line(width/2, 0, width/2, height);
// 	line(0, height/2, width, height/2);

// 	fill("white");

// 	/* for each quandrant, determine of mouse 
// 		is inside bounds */	
// 	if (mouseX > width/2 && mouseY > height/2) {
// 		rect(width/2, height/2, width, height);
//         image(yeet, 250, 250, width/2 , height/2);
// 	} else if (mouseX < width/2 && mouseY > height/2) {
// 		rect(0, height/2, width/2, height);
//          image(yeet, 0, 250, width/2 , height/2);
// 	} else if (mouseX > width/2 && mouseY < height/2) {
// 		rect(width/2, 0, width, height/2);
//         image(yeet, 250, 0, width/2 , height/2);
// 	} else {
// 		rect(0, 0, width/2, height/2);
//         image(yeet, 0, 0, width/2 , height/2);
// 	}
// }
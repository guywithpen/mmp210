var playerScore = 0;
var currentBackgroundTilePosition;
var backgroundTiles;
var runnerSpeed = 15;
var jumpPower = 15;
var gravity = 1;
var currentPlatformLocation;
var platformsGroup;
var gameOver = false;
var runningAnimation;
var jumpingAnimation;
var gameBackground;
var platformBackground;
var gameFont;
var gameMusic;
var gameOverMusic;
var jumpSound;
var runner;
var floorColliderObject;
var wave;
var mordy;
var object;
var x = 100;
var speed = 5;
var serial;
var portName = "COM8";
var sensorValue;
var isPressed = false;
var ocean;


function setup() {
   
    createCanvas(840, 500);
    runner = createSprite(50, 100, 25, 40);
    runner.depth = 4;
    runner.addImage(mordy); 
//    runner.addAnimation('jump', jumpingAnimation);
//    runner.addAnimation('run', runningAnimation);
    //runner.setCollider("rectangle", 0, 0, 10, 41);
     runner.setDefaultCollider();
//    floorColliderObject.setCollider("rectangle", 0,0,width,100);
    platformsGroup = new Group;
    currentBackgroundTilePosition = -width;
    backgroundTiles = new Group;
//    gameMusic.play();
      serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open(portName);
}

function preload() {
    mordy = loadImage("smolmord.png");
    wave = loadImage("smolwave.png");
    ocean = loadImage("ocean.png");
}

function draw() {
    console.log(sensorValue);
     //console.log(runner.position.y);
    if (!gameOver) { 
        background(200);
        image(ocean,camera.position.x - width/2, 0,width, height);
        drawSprites();
//        addNewPlatforms();
        runner.velocity.y += gravity;
        runner.collide(platformsGroup, solidGround);
        jumpDetection();
        runner.velocity.x = runnerSpeed;
        camera.position.x = runner.position.x + 300;
        
        removeOldPlatforms();
        addNewBackgroundTiles();
        removeOldBackgroundTiles();
        fallCheck();
        
        updateSprites(false);
        if (runner.position.y < 0){
            runner.position.y = 0;
        }
        	
//	for (var i = 0; i < 10; i++){
//	ellipse(i*width/10, 100, 100);
//	}
//	x += speed;
//	if (x > width/5) {
//		x = 0;
//	}
        
    }

    if (gameOver) {
            gameOverText();
            if (isPressed) {
            newGame();
            updateScore();  
                runner.velocity.y = 0;
            runner.position.y=0;}

    }
}

function addNewPlatforms() {
    if (platformsGroup.length < 5) {
        var currentPlatformLength = 1132;
        var platform = createSprite((currentPlatformLocation * 1.3), random(300, 400), 1132, 336);
        platform.collide(runner);
        currentPlatformLocation += currentPlatformLength;
//        platform.addAnimation('default', platformBackground);
        platform.addImage(wave);
        platform.depth = 3;
        platformsGroup.add(platform);
    }
}

function solidGround() {
    console.log("collision");  
    runner.velocity.y = 0;
//    runner.changeAnimation("run");
    if (runner.touching.bottom) {
        runner.velocity.x = 0;
        runner.velocity.y = 0;
    }
}

function jumpDetection() {
//    if (keyWentDown(UP_ARROW)) {
////        runner.changeAnimation("jump");
////        runner.animation.rewind();
//        runner.velocity.y = -jumpPower;
//    }
        if (sensorValue > 150 && isPressed) {
            
//        runner.changeAnimation("jump");
//        runner.animation.rewind();
        runner.velocity.y = -jumpPower;
//            isPressed = true;
    }
//    if (sensorValue < 10)
//    {isPressed = false;}
}

function removeOldPlatforms() {
    for (var i = 0; i < platformsGroup.length; i++) {
        if ((platformsGroup[i].position.x) < runner.position.x - width) {
            platformsGroup[i].remove();
        }
    }
}

function addNewBackgroundTiles() {
    if (backgroundTiles.length < 20) {
        currentBackgroundTilePosition += 350;
        //var bgLoop = createSprite(currentBackgroundTilePosition, height / 2, 840, 390);
//        for (var i = 0; i < 4; i++){}
       object = createSprite(currentBackgroundTilePosition, 430, 25, 40);
    object.depth = 5;
    object.addImage(wave); 
//               object = createSprite(100 + currentBackgroundTilePosition, 300, 25, 40);
//    object.depth = 5;
//    object.addImage(wave);
////        bgLoop.addAnimation('bg', gameBackground);
//        //bgLoop.depth = 1;
//        //backgroundTiles.add(bgLoop);
//                    object = createSprite(500 + currentBackgroundTilePosition, 300, 25, 40);
//    object.depth = 5;
//    object.addImage(wave);
//        bgLoop.addAnimation('bg', gameBackground);
//        bgLoop.depth = 1;
        backgroundTiles.add(object);
    }
}

function removeOldBackgroundTiles() {
    for (var i = 0; i < backgroundTiles.length; i++) {
        if ((backgroundTiles[i].position.x) < runner.position.x - width) {
            backgroundTiles[i].remove();
        }
    }
}

function fallCheck() {
    if (runner.position.y > height) {
        gameOver = true;
    }
//    gameMusic.stop();
//    gameOverMusic.play();
}

function gameOverText() {
    background(0, 0, 0, 10);
    fill('white');
    stroke('black')
    textAlign(CENTER);
//    textFont(gameFont);

    strokeWeight(2);
    textSize(90);
    strokeWeight(10);
    text("GAME OVER", camera.position.x, camera.position.y);

    textSize(15);
    text("Jump to try again", camera.position.x, camera.position.y + 100);

    textSize(20);
    text("You ran " + playerScore + ' yards!', camera.position.x, camera.position.y + 50);
}

function newGame() {
    platformsGroup.removeSprites();
    backgroundTiles.removeSprites();
    gameOver = false;
    updateSprites(true);
    runnerSpeed = 15;
    runner.position.x = 50;
    runner.position.y = 100;
    runner.velocity.x = runnerSpeed;
    currentPlatformLocation = -width;
    currentBackgroundTilePosition = -width;
    playerScore = 0;
//    gameOverMusic.stop();
//    gameMusic.play();
}

function updateScore() {
    if (frameCount % 60 === 0) {
        playerScore++;
    }
    fill('white');
//    textFont(gameFont);
    strokeWeight(2);
    stroke('black');
    textSize(20);
    textAlign(CENTER);
    text(playerScore, camera.position.x + 350, camera.position.y + 160);
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
            if (sensorValue > 130 && isPressed  == false) {
            
//        runner.changeAnimation("jump");
//        runner.animation.rewind();
//        runner.velocity.y = -jumpPower;
            isPressed = true;
    }
    if (sensorValue < 10)
    {isPressed = false;}
}


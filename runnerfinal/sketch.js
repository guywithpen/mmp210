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
//var mordy:

function setup() {
    createCanvas(840, 390);
    runner = createSprite(50, 100, 25, 40);
    runner.depth = 4;
//    runner.addAnimation('jump', jumpingAnimation);
//    runner.addAnimation('run', runningAnimation);
    runner.setCollider("rectangle", 0, 0, 10, 41);
    platformsGroup = new Group;
    currentBackgroundTilePosition = -width;
    backgroundTiles = new Group;
//    gameMusic.play();
}

function preload() {
   // mordy = loadImage("mordy.png");

}

function draw() {
    if (!gameOver) {
        background(200);
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
        gameOverText();
        updateSprites(false);
        if (keyWentDown(UP_ARROW)) {
            newGame();
            updateScore();
        }
    }

    if (gameOver) {

    }
}

function addNewPlatforms() {
    if (platformsGroup.length < 5) {
        var currentPlatformLength = 1132;
        var platform = createSprite((currentPlatformLocation * 1.3), random(300, 400), 1132, 336);
        platform.collide(runner);
        currentPlatformLocation += currentPlatformLength;
//        platform.addAnimation('default', platformBackground);
        platform.depth = 3;
        platformsGroup.add(platform);
    }
}

function solidGround() {
    runner.velocity.y = 0;
//    runner.changeAnimation("run");
    if (runner.touching.right) {
        runner.velocity.x = 0;
        runner.velocity.y += 30;
    }
}

function jumpDetection() {
    if (keyWentDown(UP_ARROW)) {
//        runner.changeAnimation("jump");
//        runner.animation.rewind();
        runner.velocity.y = -jumpPower;
    }
}

function removeOldPlatforms() {
    for (var i = 0; i < platformsGroup.length; i++) {
        if ((platformsGroup[i].position.x) < runner.position.x - width) {
            platformsGroup[i].remove();
        }
    }
}

function addNewBackgroundTiles() {
    if (backgroundTiles.length < 3) {
        currentBackgroundTilePosition += 839;
        var bgLoop = createSprite(currentBackgroundTilePosition, height / 2, 840, 390);
//        bgLoop.addAnimation('bg', gameBackground);
        bgLoop.depth = 1;
        backgroundTiles.add(bgLoop);
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

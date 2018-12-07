var runnerSpeed = 15;
var jumpPower = 15;
var gravity = 1;
var currentPlatformLocation = -width;
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

function setup(){
    createCanvas(840,390);
    runner = createSprite(50,100,25,40);
    runner.depth = 4;
    runner.addAnimation('jump', jumpingAnimation);
    runner.addAnimation('run', runningAnimation);
    runner.setCollider("rectangle", 0,0,10,41);
    platformsGroup = new Group;
    }

function preload(){

}

    function draw(){
    if(!gameOver){
    background(200);
    drawSprites();
    addNewPlatforms();
    runner.velocity.y += gravity;
    runner.collide(platformsGroup, solidGround);
    jumpDetection();
    runner.velocity.x = runnerSpeed;
    camera.position.x = runner.position.x + 300;
    removeOldPlatforms();
  }

  if(gameOver){

  }   
    }

function addNewPlatforms(){
  if(platformsGroup.length < 5){
    var currentPlatformLength = 1132;
    var platform = createSprite((currentPlatformLocation * 1.3), random(300,400), 1132, 336);
    platform.collide(runner);
    currentPlatformLocation += currentPlatformLength;
    platform.addAnimation('default', platformBackground);
    platform.depth = 3;
    platformsGroup.add(platform);
  }
}

function solidGround(){
  runner.velocity.y = 0;
  runner.changeAnimation("run");
  if(runner.touching.right){
    runner.velocity.x = 0;
    runner.velocity.y+= 30;
  }
}

function jumpDetection(){
  if(keyWentDown(UP_ARROW)){
    runner.changeAnimation("jump");
    runner.animation.rewind();
    runner.velocity.y = -jumpPower;
  }
}

function removeOldPlatforms(){
  for(var i = 0; i < platformsGroup.length; i++){
      if((platformsGroup[i].position.x) < runner.position.x-width){
        platformsGroup[i].remove();
    }
  }
}
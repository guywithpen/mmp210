function setup() {
	createCanvas(640, 360);
}

function draw() {
    
    // draw line between the mouse position and origin point
	var x = mouseX;
	var y = mouseY;
	line(x, y, 0, 0);

	// draw circle at mouse position
    fill ("plum")
	ellipse(x, y, 40);

    
    
	//background(220);
	//head var
    var skinColor = "#b35900"; 
    var headX = 100;
    var headY = 90;
    var headW = 220;
    var headH = 200;

    //ear var
    var skinColor = "#b35900"; 
    var earX =250;
    var earY = 160;
    var earW = 110;
    var earH = 80;

    //right eye var
    var reColor = "#1a0600"; 
    var reX = 220;
    var reY = 180;
    var reW = 40;
    var reH = 70;

    //left eye var
    var leColor = "#1a0600"; 
    var leX = 140;
    var leY = 180;
    var leW = 40;
    var leH = 70;

    //hair var
    var hairColor = "#1a0600"; 
    var hairX = 80;
    var hairY = 30;
    var hairW = 270;
    var hairH = 90;

    //maw var
    var mawColor = "#a03120"; 
    var mawX = 180;
    var mawY = 250;
    var mawW = 90;
    var mawH = 20;


    //head
    fill(skinColor);
    noStroke();
    rect(headX, headY, headW, headH);
    
     //ear
    fill(skinColor);
    noStroke();
    rect(earX, earY, earW, earH);
    
    //right eye
     fill(reColor);
    ellipse(reX, reY, reW, reH);
    
     //left eye
   fill(leColor);
    ellipse(leX, leY, leW, leH);
    
     //hair
    fill(hairColor);
    noStroke();
    rect(hairX, hairY, hairW, hairH);
    
      //maw
   fill(mawColor);
    ellipse(mawX, mawY, mawW, mawH);
    
    

	
}
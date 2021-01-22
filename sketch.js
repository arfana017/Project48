
var END1 = 1;
var END2 = 2;
var PLAY = 3;
var gameState = "inst";
//var tries = 3;
var time = 30;

function preload() {

gameImage = loadImage("PROJECT46 PICTURE.webp");

}

function setup() {
  createCanvas(400,400);

  turtle = createSprite(72,340,25,25);
  turtle.visible = false;
  
}

function draw() {

  background(69,196,194);
  
  if(gameState === "inst") {

    fill(255);
    textSize(30);
    text("Welcome!",130,100);
    textSize(20);
    text("To win the game, click on the",70,150);
    text("hidden turtle in the picture",80,190)
    text("You have 30 seconds!",100,230)
    textSize(30);
    text("Press Space to Start!",60,280);


    if(keyDown("space") && gameState === "inst") {

      gameState = "play";

    }

  }

  if(gameState === "play") {

    imageMode(CENTER)
    image(gameImage,200,200,400,400);

    fill(5,115,140);
    strokeWeight(4);
    stroke(255);
    textSize(30)
   // text("Tries: " + tries,250,50);
   text("Time: " + time,250,50)

   if (frameCount % 30 === 0) {

    time = time - 1;

   }

   if(time <= 0){

    gameState = "end2";

   }

   if(mousePressedOver(turtle) && time != 0) {

      gameState = "end1";

    } 
    
    
  }

 if(gameState === "end1") {

    fill(255);
    stroke(69,196,194)
    textSize(40);
    text("You Win!",120,200);

  }

  if(gameState === "end2") {

    imageMode(CENTER)
    image(gameImage,200,200,400,400);

    fill(255);
    stroke(69,196,194)
    strokeWeight(4)
    textSize(30);
    text("You Lost",140,100);
    text("The turtle is in the red",60,160)
    text("circle at the bottom left",50,200)
    text("Thanks for Playing!",70,240)

    strokeWeight(4);
    stroke("red")
    noFill();
    ellipse(72,340,55,55);

  }

  drawSprites();
}

/*function mouseClicked(){
 
if(gameState !== "end2" && gameState !== "inst" && gameState !== "end1") {

  tries = tries - 1;
  if(tries === 0) {

    gameState = "end2"

  }

  console.log(tries)
  console.log("inside mousePressed")


}
}*/
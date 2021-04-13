var YODA, YODA_img;
var LUKESKYWALKER, LUKESKYWALKER_img;
var DARTHVADER , DARTHVADER_img;
var STORMTROOPER , STORMTROOPER_img;

function preload(){
YODA_img = loadImage("YODA.png");
LUKESKYWALKER_img = loadImage("LUKESKYWALKER.png");
DARTHVADER_img = loadImage("DARTHVADER.png");
STORMTROOPER_img = loadImage("STORMTROOPER.png");
}

function setup() {
  createCanvas(400, 400);
  var YODA = createSprite(200,200);
  YODA.addImage("YODA",YODA_img);
  YODA.scale = 0.2;
  
  var LUKESKYWALKER = createSprite();
  LUKESKYWALKER.addImage("LUKESKYWALKER", LUKESKYWALKER_img);
  LUKESKYWALKER.scale = 0.1;
  
  var DATHVADER = createSprite(200,200);
  DATHVADER.addImage("DATHVADER",DARTHVADER_img);
  DATHVADER.scale = 0.2;
  
  var STORMTROOPER = createSprite();
  STORMTROOPER.addImage("STORMTROOPER", STORMTROOPER_img);
  STORMTROOPER.scale = 0.1;
}

function draw() {
  background(220);
  
  if(JEDI.isTouching("BLACKORDER")){
    
  }
  
   JEDI.y = World.mouseY;
  
    if (World.frameCount % 80 == 0) {
    if (select_BLACKORDER == 1) {
      DATHVADER();
    } else if (select_BLACKORDER == 2) {
      DATHVADER();
    } else if (select_BLACKORDER == 3) {
      STORMTROOPER();
    } else {
      STORMTROOPER();
    }
  }
  drawSprites();
}

function JEDI(){
 
}

function BLACKORDER(){

}
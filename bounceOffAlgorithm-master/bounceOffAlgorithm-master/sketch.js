var fixedrect, movingrect;
var gameobject1, gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 100, 50, 80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect = createSprite(400, 800,80,30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  gameobject1=createSprite(100,100,50,50);
  gameobject2=createSprite(200,100,50,50);
  gameobject3=createSprite(300,100,50,50);
  gameobject4=createSprite(400,100,50,50);
  gameobject1.shapeColor="green";
  gameobject2.shapeColor="blue";
  gameobject3.shapeColor="yellow";
  gameobject4.shapeColor="red";

}

function draw() {
  background(0,0,0);  
  
  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  if(istouching (movingrect, gameobject1)){
        movingrect.shapeColor="gold";
        gameobject1.shapeColor="silver";
  }
  else{
    movingrect.shapeColor="green";
    gameobject1.shapeColor="green"; 
  }
  
 
  drawSprites();
}
function istouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2&&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2 ){
      return true;
    }
    else{
      return false;
    }
}
var dog,happyDog,database, foodS, foodStock, dogImage, happyDogImage;

function preload()
{
dogImage=loadImage("images/dogImg.png");
happyDogImage=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
 dog=createSprite(200,200,20,20)
 dog.addImage(dogImage)

 database=firebase.database();
 foodStock=database.ref('Food');
 foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogImage)
  }

  drawSprites();
  //add styles here

}
function printStock(){
textSize(20);
fill("black")

text("Note:Press Up Arrow to Feed",100,100)
}

function readStock(data){
foodS=data.val();
}
function writeStock(x){

if (x>=0){
x=0
}
else{
x=x-1
}
database.ref("/").update({
Food:x
})
}
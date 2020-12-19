var dog
var happyDog
var database
var foodStock
var foodS
var milk

function preload()
{
  dog = loadImage('images/dogImg.png')
  happyDog = loadImage('images/dogImg1.png')
  milk = loadImage('images/Milk.png')
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,20,20)
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(Happydog)
    foodStock=foodStock-1
  }
  drawSprites();
  print("Food:",foodStock,250,50)
  textSize(50)
  fill("white")
  stroke("black")
  writeStock();
  
  //add styles here

}
function readStock(data){
  foodStock=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  } 

  database.ref('/').update({
    Food:x
  })
}





var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   //creatig cnvas
   createCanvas(400,400)
   //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("running",monkey_running);
   monkey.scale = 0.1;
  
   //creating ground
   ground = createSprite(400,350,900,10);
   ground.velocityX = -4;
   ground.x = ground.width/2;
   
   //creating food group 
   foodGroup= new Group();        
   obstacleGroup = new Group();
  
   survivalTime = 0;
}

function draw() {
  background("white");
  text("survival Time : "+ survivalTime, 300,50);
  
  
  
//colliding the monkey with the ground
  monkey.collide(ground);
  
// making infinitely moving ground
  if (ground.x < 0)
  {
   ground.x = ground.width/2;
  }
  
//making the monkey jump
  if(keyDown("space")&& monkey.y >= 200) 
  {
   monkey.velocityY = -12;
  }
//adding gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
//calling function food
  food();
  obstacles();
  
//destoying bananas when touched to monkey
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach();
    survivalTime = survivalTime+2
  }

//decreasing points when monkey ouches the obstacle
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach();
    survivalTime = survivalTime-2;
  }
  
drawSprites();  
}

function food(){
  if(frameCount%80===0)
  { 
    rand = Math.round(random(120,200));
   banana = createSprite(300,rand,20,20);
   banana.addImage("bann",bananaImage);
   banana.velocityX = -4;
   banana.scale=0.1;
   banana.lifetime = 65;
   foodGroup.add(banana);
   
  }
}

function obstacles(){
   if(frameCount%300===0)
  { 
   obstacle = createSprite(300,330,20,20);
   obstacle.addImage("obs",obstacleImage);
   obstacle.velocityX = -4;
   obstacle.scale=0.1;
   obstacle.lifetime = 65;
   obstacleGroup.add(obstacle);
}
}






































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































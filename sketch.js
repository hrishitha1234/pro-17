function setup() {
  createCanvas(600, 600);
  //creating background
  scene=createSprite(0,0,600,600);
  scene.addImage(backgroundImage);
  scene.scale=2.5;
  scene.velocityX=-2
  scene.x=scene.width/2
  
}

function draw() {

}
var select_balloon=Math.round(random(1,4));

if(world.framecount%100==0){
  if(select_balloon==1){
    redBalloon();
  }else{
    pinkBalloon();
  }
}
redB=new group();
greenB=new group();
blueB=new group();
pinkB=new group();
arrowGroup=new group();

function redBalloon() {
var red=createSprite(0,Math.round(random(20,370)),10,10);
red.addImage(red_balloonImage);
red.velocityX=3;
red.lifetime=150;
red.scale=0.1;
  redB.add(red);
}

function greenBalloon(){
var green=createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX=3;
  green.lifetime=150;
  green.scale=0.1;
  greenB.add(green);
}

function blueBalloon(){
var blue=createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX=3;
  blue.lifetime=150;
  blue.scale=0.1;
  blueB.add(blue);
}

function pinkBalloon(){
  

var pink=createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX=3
  pink.lifetime=150;
  pink.scale=0.1;
  pinkB.add(pink);
}


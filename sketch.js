var smallforward=0

var followers=1000
var followerspost=0
var likes=0
var likespost=0
level=0
socialtext1=0
backgroundlevel=0
regscreen=0


function preload(){
//startbutton
startnowImg=loadImage("startnow.png")

//small foward position
sfImg=loadImage("sf.png")

//choose position question
choosepositionImg=loadImage("chooseposition.png")

//green border
greenborderImg=loadImage("greenblock.png")

//socialmedia icon
socialmediaImg=loadImage("socialmedia.png")

//background social
backgroundsocial=loadImage("backgroundsocial.png")

infoboxImg=loadImage("infobox.png")

//jobs background
backgroundjobs=loadImage("backgroundjobs.png")

//jobs button
jobsiconImg=loadImage("jobsicon.png")

//sports background
backgroundsports=loadImage("backgroundsports.png")
}

function setup(){
  createCanvas(375,667);
  background("blue");

startnow=createSprite(180,500)
startnow.addImage(startnowImg)
startnow.scale=1
startnow.setCollider("rectangle", 7, -5, 345, 70, 0);


smallforward=createSprite(220,400)
smallforward.addImage(sfImg)
smallforward.scale=0 //1.5
smallforward.debug=true
smallforward.setCollider("rectangle", -25, -22, 100, 70, 0);



chooseposition=createSprite(190,200)
chooseposition.addImage(choosepositionImg)
chooseposition.scale=0 //.7


greenborder=createSprite(200,450)
greenborder.addImage(greenborderImg)
greenborder.scale=0 //0.35
greenborder.rotation=90

socialmedia=createSprite(340,450)
socialmedia.addImage(socialmediaImg)
socialmedia.scale=0 //.17
//socialmedia.debug=true
socialmedia.setCollider("circle", 5, -25, 220,)

closesocialmedia=createSprite(174,585)
closesocialmedia.debug=true
closesocialmedia.setCollider("rectangle", 18, 30, 315, 90, 0)
closesocialmedia.visible=false
closesocialmedia.scale=0

postonsocialmedia=createSprite(185,270)
postonsocialmedia.debug=true
postonsocialmedia.setCollider("rectangle", 7, 25, 316, 90, 0)
postonsocialmedia.visible=false
postonsocialmedia.scale=0

infobox=createSprite(185,300)
infobox.addImage(infoboxImg)
infobox.scale=0
infobox.debug=false
infobox.setCollider("rectangle", 0, 2, 255, 240, 0)

jobicon=createSprite(270,452)
jobicon.addImage(jobsiconImg)
jobicon.scale=0 //0.55

x=createSprite(150,0)
x.visible=false

y=createSprite(150,120)
y.visible=false

loadersports=createSprite(185,1000)
loadersports.addImage(backgroundsports)
loadersports.scale=1.035


clicksports=createSprite(182,450)
//clicksports.debug=true
clicksports.setCollider("rectangle", 8.5, 15, 316, 90, 0)
clicksports.scale=0
clicksports.visible=false
 
}

function draw() {
  
 

  if(backgroundlevel<=1){
  background("teal");
  }
  

  
  if(mousePressedOver(clicksports)){
    loadersports.velocityY=-35
  }

  if(loadersports.isTouching(x)){
    backgroundlevel+=3
    loadersports.scale=0
  }


if(mousePressedOver(closesocialmedia)){

closesocialmedia.scale=0
backgroundlevel-=1
greenborder.scale=0.35
socialmedia.scale=0.12
socialtext1-=1
}





    if(mousePressedOver(socialmedia)){
      //socialtext+=1
      backgroundlevel+=1
      closesocialmedia.scale=1
      postonsocialmedia.scale=1

      socialmedia.scale=0
      greenborder.scale=0
      

regscreen+=2
    }
if(backgroundlevel>=1){
  background(backgroundsocial)
}
if(backgroundlevel>=2){
  background(backgroundjobs)
}
if(backgroundlevel>=3){
  background(backgroundsports)
}

if(y.isTouching(x)){
  clicksports.scale=1
}

if(mousePressedOver(jobicon)){
  socialmedia.scale=0
  greenborder.scale=0
  jobicon.scale=0
  backgroundlevel+=2
  
  y.velocityY=-4
}


  if(socialtext1>=1){
  
    textSize(20)
    text("Avg likes "+ likes,104,230)
  
    textSize(20)
    text("Followers "+ followers,104,200)

 

    followerspost+=random(1,5)
    if(followers>800){
    likespost+=random(1,3)
    }
    if(likespost<1.5){
      likes+=160
    }
    if(likespost<2){
      likes+=190
    }
    if(likespost<3){
      likes+=245
    }
    
    
    if(followerspost<2){
      followers+=160
    }
    if(followerspost<3){
      followers+=235
    }
    if(followerspost<4){
      followers+=355
    }
    if(followerspost<5){
      followers+=415
    }


  }
  

  textSize(30)
  text("level "+ level,75,20)

  textSize(30)
  text("socialtext "+ socialtext1,160,34)

  textSize(20)
  text("regscreen "+ regscreen,240,44)


 
  textSize(50)
  fill(00,990,50)
  text(mouseX + "," +mouseY , mouseX, mouseY)



  drawSprites();
  rightafterstartnow()
  socialmediaprogress()
}
function rightafterstartnow(){
  if(mousePressedOver(startnow)){
startnow.scale=0
smallforward.scale=1.5
chooseposition.scale=.38
  }
  if(mousePressedOver(smallforward)){
    
    smallforward.y=40
    smallforward.x=40
    smallforward.scale=0.5

    jobicon.scale=0.55

  chooseposition.scale=0

  
  greenborder.scale=0.35 //0
  socialmedia.scale=.12 //0

  
  }
}

function socialmediaprogress(){
if(mousePressedOver(postonsocialmedia)){
 //infobox.scale=1
  socialtext1+=1
postonsocialmedia.scale=0






}

  }
  




   

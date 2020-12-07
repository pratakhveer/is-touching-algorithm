var rect1,rect2,rect3,rect4
function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor = "white"
  rect2 = createSprite(200,200,50,50)
  rect2.shapeColor = "white"
rect3 = createSprite(200,100,50,50)
retct4 = createSprite(400,300,50,50)
retct4.shapeColor = "cyan"
rect3.shapeColor = "blue"
}

function draw() {
  background("black");  
  rect2.x = mouseX
  rect2.y = mouseY
  rect3.x = mouseX
  rect3.y = mouseY
if(myFunction(rect3,rect4)){

rect3.shapeColor  ="red"
    rect4.shapeColor = "red"}
  else {rect4.shapeColor = "cyan"
 rect3.shapeColor = "blue"}
  drawSprites();
}

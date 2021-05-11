const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball,blockr1;
var slingShot;
var slingShot1;
var polygon1,polygons;
function preload(){
  polygon_img=loadImage("polygon.png");
}
var blocks=[]
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  
  polygons=createSprite(500,200,10,10)
  polygons.addImage(polygon_img)
  polygons.scale=0.1
  polygon1=Bodies.rectangle(200,200,30,30,{density:1,restitution:0.3,friction:1})
  World.add(world,polygon1)
  
for (let index = 300; index <= 480; index+=30) {
    var b = new Block(index,275,30,40);
    blocks.push(b)
    if(index>300&&index<480){
   b = new Block(index,235,30,40);
    blocks.push(b)}
    if(index>350&&index<450){
      b = new Block(index,195,30,40);
       blocks.push(b)}
       if(index>380&&index<420){
        b = new Block(index,155,30,40);
         blocks.push(b)}
    }
  for (let index= 630;index<=760;index+=30){
    var g = new Block(index,180,30,40)
    blocks.push(g)
    if(index>630&&index<740){
      g = new Block(index,144,30,40);
       blocks.push(g)}
       if(index>660&&index<700){
        g = new Block(index,100,30,40);
         blocks.push(g)}
  }
  //level one
  /*block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);*/
  //level three
  /*block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
*/

  SlingShot1=new SlingShot(polygon1,{x:200,y:200})
}
function draw() {
  background(56,44,44); 
 //console.log(polygons.x)
  
  fill("lightyellow");
   ground.display();
  stand1.display();
 stand2.display()
 
  polygons.x=polygon1.position.x
  polygons.y=polygon1.position.y
  SlingShot1.display()

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  for (i=0;i<blocks.length;i++){
    blocks[i].display()
  }
  
  /*for(i=0;i<blocks.length;i++){
    blocks[i].display()
  }*/
  /*block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();*/
  fill("turquoise");
  /*block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 */
  drawSprites()
  textSize(20)
  text(mouseX+","+mouseY,mouseX,mouseY)
}
function keyPressed(){
  console.log(129)
  if (keyCode==32){
    console.log(131)
    Matter.Body.setPosition(polygon1,{x:200,y:200})

    SlingShot1.sling.bodyA=polygon1
  }
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  SlingShot1.sling.bodyA=null
}

var f1 ;
var f2 ;
var f3 ;

function setup() {
  createCanvas(500, 500) ;
  f1 = loadFont('assets/hakubo.ttf') ;
  f2 = loadFont('assets/koreanCall.ttf') ;
  f3 = loadFont('assets/gilpervelz.ttf') ;
  textAlign(CENTER)
}

function draw() {
  background("pink")
  textFont(f3) ;
  textSize(48) ;
  text("Hello World", width/2, height/2) ;

  textFont(f1) ;
  textSize(28) ;
  text("HI!", 350, 350) ;

  textFont(f2) ;
  textSize(36) ;
  text("Hey Hey!", 150, 325) ;
}

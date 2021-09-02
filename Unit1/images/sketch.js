let FFVIIRe ;
let NADDPod ;
let SouthernF ;

function setup() {
  createCanvas(500, 500);

  FFVIIRe = loadImage("assets/FFVIIRe.png") ;
  NADDPod = loadImage("assets/NADDPod.jpg") ;
  SouthernF = loadImage("assets/SouthernF.jpg") ;

  imageMode(CENTER)

}

function draw() {
  background('#78c926') ;

  image(FFVIIRe, width/2, height/2, 280, 100) ;
  image(NADDPod, width/2, height/2-150, 100, 170) ;
  image(SouthernF, width/2, height/2+120, 150, 100) ;
  
}

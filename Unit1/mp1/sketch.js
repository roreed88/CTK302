var f1 ;
var f2 ;
var f3 ;

function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);

  f1 = loadFont('assets/hakuboF.ttf') ;
  f2 = loadFont('assets/koreanF.ttf') ;
  f3 = loadFont('assets/alienF.ttf') ;
  textAlign(CENTER) ;

}



function draw() {

  background(255, 255, 255);


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    fill(0, 0, 0) ;
    beginShape() ;
    vertex(0,0) ;
    vertex(800, 0) ;
    vertex(800, 800) ;
    vertex(0, 800) ;

    beginContour() ;
    vertex(780, 20) ;
    vertex(440, 20) ;
    vertex(320, 480) ;
    vertex(780, 480) ;
    endContour() ;

    beginContour() ;
    vertex (20, 20) ;
    vertex(20, 480) ;
    vertex(300, 480) ;
    vertex(420, 20) ;
    endContour() ;
    endShape(CLOSE) ;

  } else {
    // when the mouse isn't pressed!
    fill(0, 0, 0) ;
    beginShape() ;
    vertex(0,0) ;
    vertex(800, 0) ;
    vertex(800, 800) ;
    vertex(0, 800) ;

    beginContour() ;
    vertex (20, 20) ;
    vertex(20, 480) ;
    vertex(300, 480) ;
    vertex(420, 20) ;
    endContour() ;
    endShape(CLOSE) ;

    stroke(color(0, 0, 0)) ;
    strokeWeight(4) ;

    fill(255, 255, 255) ;
    ellipse() ;

    curve()

    noStroke()

    fill(255, 255, 255) ;
    text(f2) ;
    textSize(24) ;
    text("This is BounceBack.", 575, 210) ;
    text("His superpower is his resilience.", 575, 240) ;
    text("He'll need it to fight the robots.", 575, 270) ;
    text("He takes a lot of hits...", 575, 300) ;

//text() Example
    // textFont(f3) ;
    // textSize(48) ;
    // text("Hello World", width/2, height/2) ;

    //REMOVED FOR TROUBLESHOOTING/ NEED A DIFFERENT METHOD
    // fill(255, 255, 255) ;
    // quad(780, 20, 440, 20, 320, 480, 780, 480) ;
    //
    // fill(0, 0, 0) ;
    // ellipse(450, 0, 100, 100) ;
    //
    // fill(0, 0, 0) ;
    // ellipse(540, 0, 200, 150) ;
    //
    // fill(0, 0, 0) ;
    // ellipse(640, 20, 100, 100) ;
    //
    // fill(0, 0, 0) ;
    // ellipse(780, 20, 270, 300) ;
    //
    // fill(0, 0, 0) ;
    // ellipse(800, 140, 200, 250) ;
    //
    // fill(255, 255, 255) ;
    // quad(20, 20, 20, 480, 300, 480, 420, 20) ;

    }



  // this shows mouse location - comment it out when you're done!

  fill(0);
  textSize(12) ;
  text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}

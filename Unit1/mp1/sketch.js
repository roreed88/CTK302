let f1, f2, f3, f4, f5, f6 ;

function setup() {
  createCanvas(800, 500);

  f1 = loadFont('assets/technoBoard.ttf') ;
  f2 = loadFont('assets/heyComic.ttf') ;
  f3 = loadFont('assets/komik.ttf') ;
  f4 = loadFont('assets/madMecha.ttf') ;
  f5 = loadFont('assets/originTech.ttf') ;
  textAlign(CENTER) ;

  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES) ;

}



function draw() {

  background(255, 120, 169)


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed


        //COLOR PALETTE
        //Amethyst: 155, 93, 229
        //Capri (Blue): 0, 187, 249 / Dark: 0, 130, 173
        //Radical Red: 255, 51, 102
        //Electric Lime: 206, 255, 26 / Dark: 128, 158, 17
        //Bright Yellow Crayola: 251, 177, 60
        //Pink (SKY): 255, 120, 169 / Dark: 255, 82, 145
        //Orange (Sun): 255, 117, 43
        //Yellow/Green (Sun): 209, 227, 50
        //Red/Orange (Sun): 252, 62, 40
        //Robot body (gray): 128, 145, 133

//rays
    fill(251, 177, 60) ;
    quad(638, 351, 675, 0, 800, 0, 800, 90) ;

    fill(251, 177, 60) ;
    triangle(638, 351, 600, 0, 450, 0) ;

    fill(251, 177, 60) ;
    triangle(638, 351, 325, 0, 0, 0) ;

    fill(251, 177, 60) ;
    triangle(638, 351, 0, 125, 0, 400) ;

    fill(251, 177, 60)
    triangle(638, 351, 50, 500, 450, 500) ;

    fill(251, 177, 60) ;
    triangle(638, 351, 525, 500, 625, 500) ;

    fill(251, 177, 60) ;
    triangle(638, 351, 680, 500, 790, 500);

    fill(251, 177, 60) ;
    triangle(638, 351, 800, 450, 800, 360) ;

    fill(251, 177, 60) ;
    triangle(638, 351, 800, 310, 800, 190) ;

    //Sun
    fill(255, 51, 102) ;
    ellipse(440, 10, 200, 200) ;

    fill(255, 117, 43) ;
    ellipse(440, 10, 180, 180) ;

    fill(252, 62, 40) ;
    ellipse(440, 10, 160, 160) ;

    fill(251, 177, 60) ;
    ellipse(440, 10, 140, 140) ;

    fill(255, 51, 102) ;
    ellipse(440, 10, 120, 120) ;

    fill(255, 117, 43) ;
    ellipse(440, 10, 100, 100) ;

    fill(252, 62, 40) ;
    ellipse(440, 10, 80, 80) ;

    fill(251, 177, 60) ;
    ellipse(440, 10, 60, 60) ;

    fill(255, 51, 102) ;
    ellipse(440, 10, 40, 40) ;

    fill(255, 51, 102) ;
    ellipse(440, 10, 40, 40) ;

//Earth
    stroke(color(128, 158, 17)) ;
    strokeWeight(4) ;

    fill(206, 255, 26) ;
    ellipse(166, 800, 900, 900) ;

    noStroke() ;

//cloud
    stroke(color(255, 51, 102)) ;
    strokeWeight(4) ;

    fill(255, 255, 255) ;
    ellipse(644, 68, 60, 60) ;

    fill(255, 255, 255) ;
    ellipse(637, 87, 70, 70) ;

    fill(255, 255, 255) ;
    ellipse(693, 42, 100, 100) ;

    fill(255, 255, 255) ;
    ellipse(674, 104, 85, 85) ;

    fill(255, 255, 255) ;
    ellipse(727, 82, 85, 85) ;

    noStroke() ;

//cloud stroke cover
    fill(255, 255, 255) ;
    ellipse(644, 68, 56, 56) ;

    fill(255, 255, 255) ;
    ellipse(637, 87, 66, 66) ;

    fill(255, 255, 255) ;
    ellipse(693, 42, 96, 96) ;

    fill(255, 255, 255) ;
    ellipse(674, 104, 81, 81) ;

    fill(255, 255, 255) ;
    ellipse(727, 82, 81, 81) ;

//BounceBack Unhappy
    stroke(color(0, 82, 110)) ;
    strokeWeight(4) ;

    fill(0, 187, 249) ;
    ellipse(684, 316, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(689, 364, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(650, 396, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(638, 283, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(599, 316, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(600, 364, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(578, 416, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(610, 391, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(641, 337, 75, 75) ;

    noStroke() ;

//BB stroke cover
    fill(0, 187, 249) ;
    ellipse(684, 316, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(689, 364, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(650, 396, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(638, 283, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(599, 316, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(600, 364, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(578, 416, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(610, 391, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(641, 337, 71, 71) ;

//BB face
    stroke(color(0, 82, 110)) ;
    strokeWeight(2) ;
    strokeCap(PROJECT) ;

//mouth
    fill(255, 51, 102) ;
    ellipse(658, 370, 20, 20) ;

    fill(255, 255, 255) ;
    arc(658, 370, 20, 20, 190, 330, OPEN) ;

    // fill(255, 255, 255) ;
    // arc(658, 370, 20, 20, 20, 140, OPEN) ;

//nose
    fill(0, 187, 249) ;
    arc(653, 343, 20, 20, 200, 320, OPEN) ;

//Eyelid1
    fill(0, 187, 249) ;
    arc(615, 330, 40, 40, 250, 340, OPEN) ;

    fill(0, 187, 249) ;
    arc(628, 343, 40, 40, 225, 285, OPEN) ;

//Eyelid2
    fill(0, 187, 249) ;
    arc(681, 318, 40, 40, 180, 270, OPEN) ;

    fill(0, 187, 249) ;
    arc(675, 332, 40, 40, 225, 285, OPEN) ;

//speed lines
    line(463, 172, 437, 139) ;

    line(447, 183, 430, 164) ;

    line(434, 200, 418, 181) ;

    line(432, 229, 415, 210) ;

    line(418, 246, 405, 233) ;

    line(414, 268, 395, 250) ;

    line(405, 290, 391, 276) ;

    noFill() ;
    arc(465, 250, 140, 140, 330, 30, OPEN) ;

    arc(465, 250, 165, 165, 340, 25, OPEN) ;

    arc(465, 250, 190, 190, 325, 35, OPEN) ;


//robot attacking
    stroke(color(65, 89, 73)) ;
    strokeWeight(4) ;
    strokeCap(PROJECT) ;

//body
    fill(134, 181, 148) ;
    ellipse(473, 270, 60, 90) ;

    ellipse(473, 260, 100, 60) ;

    noStroke() ;

    fill(134, 181, 148) ;
    ellipse(473, 260, 56, 86) ;

//head
    stroke(color(65, 89, 73)) ;
    strokeWeight(4) ;
    strokeCap(PROJECT) ;

    fill(134, 181, 148) ;
    ellipse(473, 235, 40, 20) ;

    quad(453, 193, 493, 193, 493, 235, 453, 235)

    fill(134, 181, 148) ;
    ellipse(473, 193, 40, 20) ;

    noStroke() ;

    fill(134, 181, 148) ;
    ellipse(473, 235, 36, 16) ;

//Robto 2.0 arms
    stroke(color(65, 89, 73)) ;
    strokeWeight(4) ;
    strokeCap(PROJECT) ;

    fill(134, 181, 148) ;
    ellipse(520, 306, 25, 25) ;

    fill(134, 181, 148) ;
    ellipse(424, 290, 20, 20) ;

    fill(251, 177, 60) ;
    arc(409, 309, 15, 15, 220, 40, OPEN) ;

    stroke(color(65, 89, 73)) ;
    strokeWeight(8) ;
    strokeCap(PROJECT) ;

    fill(251, 177, 60) ;
    arc(545, 340, 20, 20, 140, 320, OPEN) ;

    noStroke() ;

//Robot face
    stroke(color(65, 89, 73)) ;
    strokeWeight(4) ;
    strokeCap(PROJECT) ;

    line(484, 216, 480, 222) ;

    line(462, 216, 466, 222) ;

    line(473, 238, 470, 235) ;

    line(473, 238, 476, 235) ;

//antennae
    line(495, 213, 505, 213) ;

    line(450, 213, 440, 213) ;

    line(505, 217, 505, 209) ;

    line(440, 217, 440, 209) ;

    noStroke() ;

//frame
    fill(65, 89, 73) ;
    beginShape() ;
    vertex(0,0) ;
    vertex(800, 0) ;
    vertex(800, 800) ;
    vertex(0, 800) ;

    beginContour() ;
    vertex(780, 20) ;
    vertex(450, 20) ;
    vertex(330, 480) ;
    vertex(780, 480) ;
    endContour() ;

    // beginContour() ;
    // vertex (20, 20) ;
    // vertex(20, 480) ;
    // vertex(310, 480) ;
    // vertex(430, 20) ;
    // endContour() ;
    endShape(CLOSE) ;

  } else {
    // when the mouse isn't pressed!

//Sun
    fill(255, 51, 102) ;
    ellipse(440, 10, 200, 200) ;

    fill(255, 117, 43) ;
    ellipse(440, 10, 180, 180) ;

    fill(252, 62, 40) ;
    ellipse(440, 10, 160, 160) ;

    fill(251, 177, 60) ;
    ellipse(440, 10, 140, 140) ;

    fill(255, 51, 102) ;
    ellipse(440, 10, 120, 120) ;

    fill(255, 117, 43) ;
    ellipse(440, 10, 100, 100) ;

    fill(252, 62, 40) ;
    ellipse(440, 10, 80, 80) ;

    fill(251, 177, 60) ;
    ellipse(440, 10, 60, 60) ;

    fill(255, 51, 102) ;
    ellipse(440, 10, 40, 40) ;

    fill(255, 51, 102) ;
    ellipse(440, 10, 40, 40) ;

//Earth
    stroke(color(128, 158, 17)) ;
    strokeWeight(4) ;

    fill(206, 255, 26) ;
    ellipse(166, 800, 900, 900) ;

    noStroke() ;

//cloud
    stroke(color(255, 51, 102)) ;
    strokeWeight(4) ;

    fill(255, 255, 255) ;
    ellipse(87, 68, 60, 60) ;

    fill(255, 255, 255) ;
    ellipse(80, 87, 70, 70) ;

    fill(255, 255, 255) ;
    ellipse(136, 42, 100, 100) ;

    fill(255, 255, 255) ;
    ellipse(117, 104, 85, 85) ;

    fill(255, 255, 255) ;
    ellipse(170, 82, 85, 85) ;

    noStroke() ;

//cloud stroke cover
    fill(255, 255, 255) ;
    ellipse(87, 68, 56, 56) ;

    fill(255, 255, 255) ;
    ellipse(80, 87, 66, 66) ;

    fill(255, 255, 255) ;
    ellipse(136, 42, 96, 96) ;

    fill(255, 255, 255) ;
    ellipse(117, 104, 81, 81) ;

    fill(255, 255, 255) ;
    ellipse(170, 82, 81, 81) ;

//ROBOT 2.0 head and body
    stroke(color(65, 89, 73)) ;
    strokeWeight(2) ;
    strokeCap(PROJECT) ;

    fill(134, 181, 148) ;
    ellipse(295, 120, 20, 10) ;

    quad(285, 120, 305, 120, 305, 140, 285, 140) ;

    noStroke() ;

    fill(134, 181, 148) ;
    quad(286, 119, 304, 119, 304, 140, 286, 140) ;

    stroke(color(65, 89, 73)) ;
    strokeWeight(2) ;
    strokeCap(PROJECT) ;

    ellipse(295, 150, 50, 30) ;

    ellipse(295, 160, 30, 45) ;

    noStroke() ;

    fill(134, 181, 148) ;
    ellipse(295, 150, 44, 22) ;
    ellipse(295, 148, 44, 24) ;

//Robto 2.0 arms
    stroke(color(65, 89, 73)) ;
    strokeWeight(2) ;
    strokeCap(PROJECT) ;

    fill(134, 181, 148) ;
    ellipse(322, 162, 10, 10) ;

    fill(134, 181, 148) ;
    ellipse(268, 162, 10, 10) ;

    fill(255, 120, 169) ;
    arc(329, 169, 5, 5, 140, 320, OPEN) ;

    fill(255, 120, 169) ;
    arc(261, 169, 5, 5, 220, 40, OPEN) ;

//Robot face
    line(290, 123, 290, 128) ;

    line(300, 123, 300, 128) ;

    line(294, 131, 296, 131) ;

//antennae
    line(305, 125, 310, 125) ;

    line(285, 125, 280, 125) ;

    line(310, 123, 310, 127) ;

    line(280, 123, 280, 127) ;

//speed lines
    line(264, 135, 264, 44) ;

    line(273, 106, 273, 48) ;

    line(283, 110, 283, 45) ;

    line(290, 102, 290, 51) ;

    line(322, 138, 322, 42) ;

    line(310, 111, 310, 38) ;

    line(298, 106, 298, 46) ;

    noStroke() ;

//BB shadow
    fill(128, 158, 17) ;
    ellipse(125, 393, 80, 75) ;

    ellipse(89, 420, 75, 75) ;

    ellipse(129, 437, 75, 75) ;

    ellipse(152, 348, 75, 75) ;

    ellipse(67, 440, 75, 75) ;

    ellipse(93, 467, 75, 75) ;

    ellipse(39, 442, 75, 75) ;

    ellipse(38, 455, 75, 75) ;

//BounceBack (Happy)
    stroke(color(0, 82, 110)) ;
    strokeWeight(4) ;

    fill(0, 187, 249) ;
    ellipse(129, 243, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(110, 266, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(120, 292, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(160, 250, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(183, 276, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(169, 322, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(129, 329, 75, 75) ;

    fill(0, 187, 249) ;
    ellipse(152, 348, 75, 75) ;

    noStroke()

//cover for extra strokes
    fill(0, 187, 249) ;
    ellipse(129, 243, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(110, 266, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(120, 292, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(160, 250, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(183, 276, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(169, 322, 71, 71) ;

    fill(0, 187, 249) ;
    ellipse(129, 329, 71, 71) ;

//BB's eye1
    stroke(color(0, 82, 110)) ;
    strokeWeight(2) ;

    fill(255, 255, 255);
    arc(173, 270, 20, 20, 320, 200, CHORD) ;

    fill(0, 82, 110) ;
    ellipse(173, 270, 8, 8) ;

//BB's eye2
    fill(255, 255, 255);
    arc(125, 275, 20, 20, 320, 200, CHORD) ;

    fill(0, 82, 110) ;
    ellipse(125, 275, 8, 8) ;

    noStroke() ;

//Eyelid1
    stroke(color(0, 82, 110)) ;
    strokeWeight(2) ;
    strokeCap(PROJECT) ;

    fill(0, 187, 249) ;
    arc(172, 265, 20, 20, 200, 320, OPEN) ;

//Eyelid2
    fill(0, 187, 249) ;
    arc(124, 270, 20, 20, 200, 320, OPEN) ;

//BB's nose
    fill(0, 187, 249) ;
    arc(152, 292, 20, 20, 200, 320, OPEN) ;

//BB's Mouth
    fill(255, 255, 255);
    arc(154, 305, 30, 30, 320, 200, CHORD) ;

    noStroke() ;

//Eyeshine 1 and 2

    fill(255, 255, 255) ;
    triangle(173, 270, 170, 273, 172, 268) ;

    fill(255, 255, 255) ;
    triangle(125, 275, 122, 278, 124, 273) ;

    fill(0, 82, 110) ;
    beginShape() ;
    vertex(0,0) ;
    vertex(800, 0) ;
    vertex(800, 800) ;
    vertex(0, 800) ;


    beginContour() ;
    vertex (20, 20) ;
    vertex(20, 480) ;
    vertex(310, 480) ;
    vertex(430, 20) ;
    endContour() ;
    endShape(CLOSE) ;

    noStroke() ;

    fill(251, 177, 60) ;
    textFont(f2) ;
    textSize(24) ;
    text("This is BounceBack.", 575, 210) ;
    text("Their superpower is their resilience.", 575, 240) ;
    text("They'll need it to fight the robots.", 575, 270) ;
    text("They take a lot of hits...", 575, 300) ;

//This is BounceBack.  They have the special power of resilience.
//That's how they got their name.  They always BounceBack.
//BounceBack lives in a remote corner of the universe.
//Being stuck alone on their home planet make BounceBack want company.
//One day the robots found this lonely planet.  BounceBack was excited to make some friends...

//... but the robots were mean and wanted to kick BounceBack out of their home.
//Looks like BounceBack will need their resilience to beat the robots.
//They're gonna take a lot of hits... 

    }



  // this shows mouse location - comment it out when you're done!


  fill(0);
  textFont(f5) ;
  textSize(12) ;
  text(mouseX + ", " + mouseY, 60, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}

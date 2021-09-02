function setup(){
  createCanvas(720, 400);
}


function draw() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  background(252, 115, 91);
  noStroke();



//cloud
  fill('white') ;
  ellipse(100, 100, 57, 47) ;

  fill('white') ;
  ellipse(127, 112, 75, 70) ;

  fill('white') ;
  ellipse(145, 135, 60, 48) ;

  fill('white') ;
  ellipse(160, 100, 40, 50) ;

  fill('white') ;
  ellipse(178, 120, 50, 45) ;

 //sun
  fill(252, 143, 0) ;
  ellipse(560, 250, 158, 158) ;

  fill(252, 122, 0) ;
  ellipse(560, 250, 140, 140) ;

  fill(252, 92, 0) ;
  ellipse(560, 250, 122, 122) ;

  fill(252, 67, 0) ;
  ellipse(560, 250, 104, 104) ;

  fill(252, 38, 0) ;
  ellipse(560, 250, 86, 86) ;

//clouds
  fill('white') ;
  ellipse(528, 200, 100, 90) ;

  fill('white') ;
  ellipse(500, 190, 85, 70) ;

  fill('white') ;
  ellipse(545, 175, 75, 70) ;

  fill('white') ;
  ellipse(555, 210, 65, 50) ;

  fill('white') ;
  ellipse(480, 180, 60, 60) ;

  fill('white') ;
  ellipse(350, 80, 75, 70) ;

  fill('white') ;
  ellipse(365, 100, 80, 75) ;

  fill('white') ;
  ellipse(335, 85, 55, 50) ;

  fill('white') ;
  ellipse(380, 70, 55, 50) ;

  fill('white') ;
  ellipse(390, 110, 55, 50) ;

  fill('white') ;
  ellipse(325, 105, 70, 65) ;

  fill('white') ;
  ellipse(628, 60, 70, 65) ;

  fill('white') ;
  ellipse(615, 40, 60, 65) ;

  fill('white') ;
  ellipse(569, 70, 50, 48) ;

  fill('white') ;
  ellipse(600, 70, 70, 65) ;

  fill('white') ;
  ellipse(585, 70, 55, 40) ;

  fill('white') ;
  ellipse(585, 60, 45, 40) ;

  fill('white') ;
  ellipse(631, 78, 65, 60) ;



//ground
  fill(107, 252, 3) ;
  rect(0, 300, 720, 400) ;

//background tree trunk
  fill(153, 59, 8) ;
  quad(620, 280, 622, 280, 623, 310, 619, 310) ;

//background tree foliage
  fill(42, 171, 19) ;
  ellipse(620, 279, 20, 15) ;

  fill(42, 171, 19) ;
  ellipse(625, 275, 15, 15) ;

  fill(42, 171, 19) ;
  ellipse(630, 278, 10, 10) ;

  fill(42, 171, 19) ;
  ellipse(618, 275, 20, 15) ;

//house
  fill(132, 180, 189) ;
  rect(75, 214, 275, 150) ;

//roof
  fill(79, 72, 68) ;
  triangle(65, 214, 210, 150, 360, 214) ;

  //trunk
    fill(153, 59, 8) ;
    quad(460, 250, 450, 250, 440, 350, 460, 350) ;

  //foliage
    fill(42, 171, 19) ;
    ellipse(450, 213, 98, 70) ;

    fill(42, 171, 19) ;
    ellipse(465, 235, 103, 80) ;

    fill(42, 171, 19) ;
    ellipse(415, 228, 60, 40) ;

    fill(42, 171, 19) ;
    ellipse(420, 230, 50, 70) ;

    fill(42, 171, 19) ;
    ellipse(490, 213, 60, 55) ;

     fill(42, 171, 19) ;
    ellipse(500, 245, 45, 50) ;

//window frames
  stroke(color('white')) ;
  strokeWeight(4) ;

//windows
  fill(211, 221, 224) ;
  rect(100, 225, 30, 40) ;

  fill(211, 221, 224) ;
  rect(165, 225, 30, 40) ;

  fill(211, 221, 224) ;
  rect(230, 225, 30, 40) ;

  fill(211, 221, 224) ;
  rect(295, 225, 30, 40) ;

  fill(211, 221, 224) ;
  rect(100, 300, 30, 40) ;

  fill(211, 221, 224) ;
  rect(295, 300, 30, 40) ;

  fill(211, 221, 224) ;
  rect(230, 300, 30, 40) ;

  fill(211, 221, 224) ;
  rect(100, 225, 30, 40) ;

  noStroke()

//window molding
  stroke(color('white')) ;
  strokeWeight(4) ;
  line(115, 225, 115, 265) ;
  stroke(color('white')) ;
  strokeWeight(4) ;
  line(100, 245, 130, 245) ;

  stroke(color('white')) ;
  strokeWeight(4) ;
  line(180, 225, 180, 265) ;
  stroke(color('white')) ;
  strokeWeight(4) ;
  line(165, 245, 195, 245) ;

  stroke(color('white')) ;
  strokeWeight(4) ;
  line(245, 225, 245, 265) ;
  stroke(color('white')) ;
  strokeWeight(4) ;
  line(230, 245, 260, 245) ;

  stroke(color('white')) ;
  strokeWeight(4) ;
  line(310, 225, 310, 265) ;
  stroke(color('white')) ;
  strokeWeight(4) ;
  line(295, 245, 325, 245) ;

  stroke(color('white')) ;
  strokeWeight(4) ;
  line(310, 300, 310, 340) ;
  stroke(color('white')) ;
  strokeWeight(4) ;
  line(295, 320, 325, 320) ;

  stroke(color('white')) ;
  strokeWeight(4) ;
  line(245, 300, 245, 340) ;
  stroke(color('white')) ;
  strokeWeight(4) ;
  line(230, 320, 260, 320) ;

  stroke(color('white')) ;
  strokeWeight(4) ;
  line(115, 300, 115, 340) ;
  stroke(color('white')) ;
  strokeWeight(4) ;
  line(100, 320, 130, 320) ;

  noStroke()

//door
  fill(110, 65, 43) ;
  rect(160, 300, 40, 65) ;

  fill('gold') ;
  ellipse(165, 335, 5, 5) ;

//porch
  fill(122, 114, 91) ;
  quad(75, 364, 350, 364, 370, 390, 55, 390) ;

//columns
  stroke(color(110, 65, 43)) ;
  strokeWeight(6) ;
  line(75, 288, 75, 380) ;

  stroke(color(110, 65, 43)) ;
  strokeWeight(6) ;
  line(350, 288, 350, 380) ;

//porch overhang
  noStroke()
  fill(79, 72, 68) ;
  quad(75, 270, 350, 270, 370, 290, 55, 290) ;

  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);

  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);

  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);

  noStroke()
  fill('white')
  text(mouseX + "," + mouseY, 15, 15)
}

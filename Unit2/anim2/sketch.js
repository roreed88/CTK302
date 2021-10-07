let x = 0;

function setup() {
  createCanvas(800, 500);
}

function draw() {

  translate(x, 0);
  x = x + 3
  avatar();
  pop();

  if (x > width) {
    x = -700
  }
}



function avatar() {
  background(220);

  //BounceBack Unhappy
  stroke(color(0, 82, 110));
  strokeWeight(4);

  fill(0, 187, 249);
  ellipse(684, 316, 75, 75);

  fill(0, 187, 249);
  ellipse(689, 364, 75, 75);

  fill(0, 187, 249);
  ellipse(650, 396, 75, 75);

  fill(0, 187, 249);
  ellipse(638, 283, 75, 75);

  fill(0, 187, 249);
  ellipse(599, 316, 75, 75);

  fill(0, 187, 249);
  ellipse(600, 364, 75, 75);

  fill(0, 187, 249);
  ellipse(578, 416, 75, 75);

  fill(0, 187, 249);
  ellipse(610, 391, 75, 75);

  fill(0, 187, 249);
  ellipse(641, 337, 75, 75);

  noStroke();

  //BB stroke cover
  fill(0, 187, 249);
  ellipse(684, 316, 71, 71);

  fill(0, 187, 249);
  ellipse(689, 364, 71, 71);

  fill(0, 187, 249);
  ellipse(650, 396, 71, 71);

  fill(0, 187, 249);
  ellipse(638, 283, 71, 71);

  fill(0, 187, 249);
  ellipse(599, 316, 71, 71);

  fill(0, 187, 249);
  ellipse(600, 364, 71, 71);

  fill(0, 187, 249);
  ellipse(578, 416, 71, 71);

  fill(0, 187, 249);
  ellipse(610, 391, 71, 71);

  fill(0, 187, 249);
  ellipse(641, 337, 71, 71);

  //BB face
  stroke(color(0, 82, 110));
  strokeWeight(2);
  strokeCap(PROJECT);

  //mouth
  fill(255, 51, 102);
  ellipse(658, 370, 20, 20);

  fill(255, 255, 255);
  arc(658, 370, 20, 20, 190, 330, OPEN);

  // fill(255, 255, 255) ;
  // arc(658, 370, 20, 20, 20, 140, OPEN) ;

  //nose
  noFill();
  arc(653, 343, 20, 20, 200, 320, OPEN);

  //Eyelid1
  noFill();
  arc(615, 330, 40, 40, 250, 340, OPEN);

  noFill();
  arc(628, 343, 40, 40, 225, 285, OPEN);

  //Eyelid2
  noFill();
  arc(681, 318, 40, 40, 180, 270, OPEN);

  noFill();
  arc(675, 332, 40, 40, 225, 285, OPEN);

  //smack
  stroke(color(0, 82, 110));
  strokeWeight(8);
  strokeCap(PROJECT);

  noFill();
  arc(610, 372, 20, 20, 220, 40, OPEN);
}

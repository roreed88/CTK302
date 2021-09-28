let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER) ;
}

function draw() {

  background(255);

  switch (state) {

    case 0:
      fill(0, 0, 150) ;
      textSize(30) ;
      text("Don't Press The Button!", 200, 100, 150, 150);
      break;

    case 1:
      fill(0, 0, 150) ;
      textSize(30) ;
      text("Don't Press It Again!", 200, 100, 150, 150);
      break;

    case 2:
      fill(0, 0, 150) ;
      textSize(30) ;
      text("I'm Warning You!", 200, 100, 150, 150);
      break;
  }
    noStroke() ;
    fill(255, 0, 0) ;
    rect(100, 100, 100, 100) ;
}

function mouseReleased() {
  if((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)){
    state++;
  if (state > 2) state = 0;
}
}

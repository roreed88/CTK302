let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background(255, 171, 46);

      textSize(20);
      fill(32, 145, 62);
      text("What did the ocean say to the beach?", 200, 270, 200, 200);
      break;

    case 1:
      background(189, 255, 46);

      textSize(20);
      fill(104, 35, 161);
      text("Nothing, it just waved.", 200, 270, 200, 200);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}

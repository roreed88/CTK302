let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(0);

  switch (state) {

    case 0:
      background('white');
      textSize(30)
      fill('black');
      text("Why don't eggs tell jokes?", 200, 250, 200, 200);
      break;

    case 1:
      background('black');
      textSize(30);
      fill('white');
      text("Because they'd crack each other up!", 200, 250, 200, 200);
      break;
  }

  timer++;
  if (timer >= 3 * 60) {
    timer = 0;
    state++;
  }
  if (state > 1) {
    state = 0;
  }
}

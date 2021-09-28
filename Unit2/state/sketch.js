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
      background(66, 135, 245);

      for (let j = 0; j <= height; j += 10) {
        for (let i = 0; i <= width; i += 10) {
          fill(random(0, 255), random(0, 255), random(0, 255));
          noStroke();
          rect(i, j, 5, 5);
        }
      }
      // textSize(24) ;
      // fill(245, 182, 66) ;
      // text("state 0", 200, 200) ;
      break;
    case 1:
      background(75, 214, 15);

      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i <= width; i += 25) {
          fill(random(0, 255), random(0, 255), random(0, 255));
          noStroke();
          ellipse(i, j, 20, 20);
        }
      }

      break;
    case 2:
      background(55, 38, 74);

      for (let j = 0; j <= height; j += 50) {
        for (let i = 0; i <= width; i += 50) {
          fill(random(0, 255), random(0, 255), random(0, 255));
          noStroke();
          rect(i, j, 40, 40);
        }
      }

      break;
    case 3:
      background(255, 154, 82);

      for (let j = 0; j <= height; j += 10) {
        for (let i = 0; i <= width; i += 10) {
          fill(random(0, 255), random(0, 255), random(0, 255));
          noStroke();
          ellipse(i, j, 5, 5);
        }
      }

      break;
    case 4:
      background(232, 26, 201);

      for (let j = 0; j <= height; j += 100) {
        for (let i = 0; i <= width; i += 100) {
          fill(random(0, 255), random(0, 255), random(0, 255));
          noStroke();
          rect(i, j, 90, 90);
        }
      }

      break;
    case 5:
      background(26, 232, 205);

      for (let j = 0; j <= height; j += 4) {
        for (let i = 0; i <= width; i += 4) {
          fill(random(0, 255), random(0, 255), random(50, 200));
          noStroke();
          rect(i, j, 2, 2);
        }
      }

      break;
    case 6:
      background(0);

      for (let j = 0; j <= height; j += 100) {
        for (let i = 0; i <= width; i += 100) {
          fill(random(0, 255), random(0, 255), random(0, 255));
          noStroke();
          ellipse(i, j, 20, 20);
        }
      }

      break;
    case 7:
      background(0);

      for (let j = 0; j <= height; j += 50) {
        for (let i = 0; i <= width; i += 50) {
          fill(random(0, 255), random(0, 255), random(0, 255));
          noStroke();
          ellipse(i, j, 30, 30);
        }
      }

      for (let j = 0; j <= height; j += 52) {
        for (let i = 0; i <= width; i += 52) {
          fill(random(0, 255), random(0, 255), random(0, 255));
          noStroke();
          ellipse(i, j, 30, 30);
        }
      }
      break;
  }

}

function mouseReleased() {
  state = state + 1;
  if (state > 7) {
    state = 0;
  }
}

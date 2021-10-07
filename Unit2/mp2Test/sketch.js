let state = 0;
let timer = 0;
let vol;
let mic;
let FFVIIRe; //image variable

function setup() {
  createCanvas(500, 500);

  mic = new p5.AudioIn(); //
  mic.start();

  FFVIIRe = loadImage("assets/FFVIIRe.png"); //loading image vairable from assets

  imageMode(CENTER)
}

function draw() {

  switch (state) {
    case 0:
      background('black');
      image(FFVIIRe, 250, 250, 500, 500);
      text("please click the cake to start!", 100, 100);
      text(mouseX + "," + mouseY, 15, 15)
      break;

    case 1:
      background('blue');
      vol = (mic.getLevel().toFixed(2));
      if (vol > .20) {
        state = 2
      }
      text("listening", 100, 100);
      text(mouseX + "," + mouseY, 15, 15)
      break;

    case 2:
      background('red');
      timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 3;
      }
      text(mouseX + "," + mouseY, 15, 15)
      break;

    case 3:
      background('green');
      timer++;
      if (timer > 5*60) {
        timer = 0;
        state = 0;
      }
      text(mouseX + "," + mouseY, 15, 15)
      break;

  }
}

function mouseReleased() {
  if ((state == 0) && (mouseX > 200) && (mouseX < 350) && (mouseY > 200) && (mouseY < 350)) {
    state = 1;
  }
}

function touchStarted() {
  getAudioContext().resume();
}

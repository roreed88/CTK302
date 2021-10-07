let state = 0;
let sound1;
let sound2;
let sound3;
let f1;

function preload() {
  sound1 = loadSound('assets/8bit.mp3');
  sound2 = loadSound('assets/retro.mp3');
  sound3 = loadSound('assets/boss.mp3');

  sound1.loop();
  sound1.pause();
  sound2.loop();
  sound2.pause();
  sound3.loop();
  sound3.pause();
}


function setup() {
  createCanvas(500, 500);

  f1 = loadFont('assets/font1.ttf');
  textAlign(CENTER);

}

function draw() {
  switch (state) {
    case 0:
      background('red');
      sound1.play();
      state = 1;
      break;

    case 1:
      background('red');
      fill('yellow');
      textFont(f1);
      textSize(24);
      text("listen to song 1", 250, 250);
      break;

    case 2:
      background('blue');
      sound2.play();
      state = 3;
      break;

    case 3:
      background('blue');
      fill('0');
      textFont(f1);
      textSize(24);
      text("listen to song 2", 250, 250);
      break;

    case 4:
      background('green');
      sound3.play();
      state = 5;
      break;

    case 5:
      background('green');
      fill('orange');
      textFont(f1);
      textSize(24);
      text("listen to song 3", 250, 250);
      break;
  }

}

function mouseReleased() {
  sound1.pause();
  sound2.pause();
  sound3.pause();

  state++;
  if (state > 5) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}

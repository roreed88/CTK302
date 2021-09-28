let mic;
let vol;
let c = 'green';
let x = 0;

function setup() {
  createCanvas(400, 400);

  mic = new p5.AudioIn(); //
  mic.start();
}

function draw() {
  background(c);

  vol = (mic.getLevel().toFixed(2));

  if (vol > .20) {

    c = color(random(255), random(255), random(255)); 
  }

  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

  rect(vol * 100, 100, 50, 50);
}

function touchStarted() {
  getAudioContext().resume();
}

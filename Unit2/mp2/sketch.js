let s1, s2, s3, s4;
let i1, i2, i3, i4, i5, i6;
let f1;
let timer = 0;
let state = 0;
let x = 0;
let y = 0;

function preload() {
  s1 = loadSound('assets/retro.mp3');
  s2 = loadSound('assets/boss.mp3');
  s3 = loadSound('assets/8bit.mp3');
  // s4 = loadSound('assets/ie.mp3');

  s1.loop();
  s1.pause();
  s2.loop();
  s2.pause();
  s3.loop();
  s3.pause();
  // s4.loop();
  // s4.pause();
}

function setup() {
  createCanvas(750, 500);

  i1 = loadImage("assets/NADDPod.jpg");
  i2 = loadImage("assets/FFVIIRe.png");
  i3 = loadImage("assets/SouthernF.jpg");
  i4 = loadImage('assets/mp2.02.jpg');

  f1 = loadFont("assets/font1.ttf");

  imageMode(CENTER);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  switch (state) {
    case 0:
      s1.play();
      state = 1;
      break;

    case 1:
      background('black');
      // image(i1, 375, 250, 750, 500);
      fill('white');
      textFont(f1);
      textSize(70);
      text("The Last \nBattle", 375, 170);
      rect(375, 350, 400, 100, 20);
      fill('black');
      textSize(50);
      text("Play!", 375, 370);
      fill('white');
      textSize(30);
      text("Click", 375, 430)
      noFill();
      // fill('white');
      // textSize(12);
      // text(mouseX + "," + mouseY, 50, 50);
      break;

    case 2:
    background('white');
      // image(i4, 375, 250, 750, 500);
      fill('black');
      textFont(f1);
      textSize(20);
      textAlign(LEFT);
      text("The robots are attacking! \nYou've finished off most \nof them, but one more \nremains!", 40, 40);
      timer++;
      if (timer > 5*60) {
        timer = 0;
        state = 3;
      }
      textAlign(CENTER);
      // text(mouseX + "," + mouseY, 15, 15);
      break;

    case 3:
      image(i4, 375, 250, 750, 500);
      fill('red');
      textFont(f1);
      textSize(50);
      text("Attack!", 175, 450);
      fill('red');
      noStroke();
      rect(470, 165, 100, 100);
      rect(645, 265, 100, 100);
      noFill();
      // textSize(15);
      // text(mouseX + "," + mouseY, 470, 30);
      break;

    case 4:
      s3.play();
      state = 5;
      break;

    case 5:
    background('white');
      // image(i1, 375, 250, 750, 500);
      fill('black');
      textFont(f1);
      textSize(70);
      text("game over", 375, 250);
      timer++;
      if (timer > 6*60) {
        timer = 0;
        state = 0;
        s3.pause();
      }
      // text(mouseX + "," + mouseY, 15, 15);
      break;

    case 6:
      image(i4, 375, 250, 750, 500);
      fill('red');
      textFont(f1);
      textSize(50);
      text("Attack!", 175, 450);
      fill('red');
      rect(470, 165, 100, 100);
      rect(360, 265, 100, 100);
      noFill();
      fill('black');
      textSize(15);
      // text(mouseX + "," + mouseY, 470, 30);
      break;

    case 7:
      s2.play();
      state = 8;
      break;

    case 8:
    background('white');
      // image(i1, 375, 250, 750, 500);
      text("victory", 200, 200);
      timer++;
      if (timer > 6*60) {
        timer = 0;
        state = 0;
        s2.pause();
        // text(mouseX + "," + mouseY, 15, 15);
        break;
      }
  }
}

function mouseReleased() {
  if ((state == 1) && (mouseX > 175) && (mouseX < 575) && (mouseY > 300) && (mouseY < 400)) {
    state = 2;
  }
  if ((state == 3) && (mouseX > 420) && (mouseX < 520) && (mouseY > 115) && (mouseY < 215)) {
    state = 4;
    s1.pause();
  }
  if ((state == 3) && (mouseX > 595) && (mouseX < 695) && (mouseY > 215) && (mouseY < 315)) {
    state = 6;
  }
  if ((state == 6) && (mouseX > 420) && (mouseX < 520) && (mouseY > 115) && (mouseY < 215)) {
    state = 4;
    s1.pause();
  }
  if ((state == 6) && (mouseX > 310) && (mouseX < 410) && (mouseY > 215) && (mouseY < 315)) {
    state = 7;
    s1.pause();
  }
}

function touchStarted() {
  getAudioContext().resume();
}

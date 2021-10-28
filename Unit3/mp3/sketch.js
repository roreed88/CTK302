let cars = [];
let maxCars = 15;
let frogPos;
let timer = 0;
let state = 0;
let carsEaten = 0;
let bounceB;
let robot;
let f1;
let s1;

function preload(){
  s1 = loadSound('assets/8bit.mp3');

  s1.loop();
  s1.pause();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  f1 = loadFont('assets/technoF.ttf');

  bounceB = loadImage('assets/bounceBack.png');
  robot = loadImage('assets/robot1.png');

  textAlign(CENTER);
  imageMode(CENTER);
  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  switch (state) {
    case 0:
    background(0);
    s1.loop();
    fill(255);
    textFont(f1);
    textSize(28);
    text("Bounce Back Vs. The Robots! \n\n Click to Play! \n\n Remember to Catch the Robots with the Arrow Keys!", width / 2, height / 2);
    state = 1;
    break;
    case 1:
      background(0);
      fill(255);
      textFont(f1);
      textSize(28);
      text("Bounce Back Vs. The Robots! \n\n Click to Play! \n\n Remember to Catch the Robots with the Arrow Keys!", width / 2, height / 2);
      break;

    case 2:
      game();
      timer++;
      if(timer > 30*60) {
        timer = 0;
        state = 3;
      }
      break;

    case 3:
      background(0, 0, 255);
      fill(0);
      textFont(f1);
      textSize(28);
      text("Victory! \nYou're Keepin' It Bouncy!", width / 2, height / 2);
      break;

    case 4:
      background(0);
      fill(255);
      textFont(f1);
      textSize(28);
      text("Lose! \nBounce Back!", width / 2, height / 2);
      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 1:
      state = 2;
      break;

    case 3: // win
      resetTheGame();
      state = 0;
      break;

    case 4: //lose
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  background(255, 236, 23);
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      carsEaten++;
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  fill(0);
  textFont(f1);
  textSize(14);
  text("cars left: " + cars.length + "\ncars eaten:" + carsEaten, 60, 30);

  image(bounceB, frogPos.x, frogPos.y, 95, 115);
  checkForKeys();
}

function resetTheGame() {
  timer = 0;
  s1.pause();
  cars = [];
  carsEaten = 0;
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  // could reset score look at section 1 class code
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

class Car {
  constructor() {
    this.pos = createVector(random(100), random(100));
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.col = color(random(255), random(255), random(255));
    this.size = random(10, 50);
  }

  display() {
    fill(this.col);
    noStroke();
    // rect(this.pos.x, this.pos.y, 75, 25, 10);
    // textSize(this.size);
    image(robot, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function touchStarted() {
  getAudioContext().resume();
}

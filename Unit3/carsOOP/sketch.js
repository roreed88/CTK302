// let myCar1, myCar2, myCar3;

let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn an object

  // myCar1 = new Car();
  // myCar2 = new Car();
  // myCar3 = new Car();

  for (let i = 0; i < 100; i++) {
    cars.push(new Car());
  }
}

function draw() {
  background(255);

  // myCar.display();
  // myCar.move();

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(100), random(100));
    //position
    this.vel = createVector(random(-5, 5), random(-5, 5));
    //velocity
    //rain, make x = 0, y = -interger
    this.col = color(random(255), random(255), random(255), random(255));
    //color
    // fourth parameter = opacity
    this.size = random(50, 150);
  }

  // methods

  display() {
    fill(this.col);
    noStroke();
    // rect(this.pos.x, this.pos.y, 75, 25, 10);
    textSize(this.size);
    text("Whoohoo!", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

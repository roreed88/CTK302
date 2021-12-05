let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();

  // Spawn an object

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }

}

function draw() {

  background(39, 156, 107);

   cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].move();

  if (cars[i].a <= 0){
    cars.splice(i, 1);
  }
}
}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    // this.x = 100
    this.pos = createVector(40, height/2);
    this.vel = createVector(random(10), random(-1, 1));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);


  }

  // methods

  display() {

    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 10);

  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 1;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}

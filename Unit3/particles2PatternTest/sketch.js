let cars = [];
let pattern;
let cols = 5;
let rows = 5;
let state = 0;

function setup() {
  createCanvas(800, 800);

  pattern = loadImage('assets/patternParticles.png');

  noStroke();

  cols = width/pattern.width;
  rows = height/pattern.height;
  if( width%pattern.width> 0){cols++;}
  if( height%pattern.height > 0){rows++;}

  // Spawn an object

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }

}

function draw() {

  background(39, 156, 107);

  for (var y=0; y < rows; y++){
      for (var x = 0; x < cols; x++){
        image(pattern, x*pattern.width, y*pattern.height);
      }
    }

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
    this.pos = createVector(100, 100);
    this.vel = createVector(random(10), random(10));
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

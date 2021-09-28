let x = 0 ;
let y = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255) ;
  fill(random(0, 255), random(0, 255), random(0, 255)) ;
  rect(x, y, 100, 100) ;
  x = x + 1 ;
  y = y + 1 ;
if (x > width) {
  x = 0 ;
}

if (y > height) {
  y = 0
}

}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('white') ;

  stroke(color('red')) ;
  strokeWeight(5) ;
  line(20, 30, 400, 400) ;

  noStroke() ;

  fill('blue') ;
  ellipse(75, 200, 100, 100) ;

  stroke(color('green')) ;
  strokeWeight(10) ;
  line(57, 467, 389, 67)

  noStroke() ;

  fill('yellow') ;
  rect(267, 100, 80, 80) ;
}

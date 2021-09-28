let state = 0 ;
let timer = 0 ;
let x = 0 ;
let velocity = 5 ;

function setup() {
  createCanvas(500, 500);

  ellipseMode(CENTER) ;
  rectMode(CENTER) ;
}

function draw() {
  background(255) ;

  //car
    fill('blue') ;
    rect(x, 480, 75, 20) ;
    x = x + velocity ;
    if(x > width) x = 0 ;

  noStroke() ;
  fill('yellow') ;
  rect(width/2, height/2, 175, 400) ;

  fill('black') ;
  ellipse(width/2, height/2 - 125, 100, 100) ;

  ellipse(width/2, height/2, 100, 100) ;

  ellipse(width/2, height/2 + 125, 100, 100) ;

  switch (state) {
    case 0: //red
      fill('red') ;
      ellipse(width/2, height/2 - 125, 100, 100) ;
      velocity = 0 ;
    break;

    case 1: //green
      fill('green') ;
      ellipse(width/2, height/2 + 125, 100, 100) ;
      velocity = 5 ;
    break;

    case 2: //yellow
      fill('orange') ;
      ellipse(width/2, 250, 100, 100) ;
      velocity = 2 ;
    break;
}

timer = timer + 1;
if(timer > 100){
  timer = 0 ;
  state++ ;
  if(state > 2) state = 0 ;
}
}

// function mouseReleased(){
//   state++;
//   if (state > 2) state = 0;
// }

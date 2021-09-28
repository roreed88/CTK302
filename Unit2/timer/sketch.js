let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  timer++;
  //5*60 = 5 seconds because draw renders 60 times per second
  //somethign about frame rate refreshing and 229 and 360?
  if(timer >= 5*60){
    timer = 0 ;
    print("beep") ;
  }
}

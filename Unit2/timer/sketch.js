let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  switch (state) {
    case 0:
    background('black');
      timer++;
      if(timer >= 5*60){
        timer = 0;
        state = 1;
      }
    break;

    case 1:
    background('gray');
    timer++;
    if(timer >= 8*60){
      timer = 0;
      state = 2;
  }
    break;

    case 2:
    background('red');
    timer++;
    if(timer >= 3*60){
      timer = 0;
      state = 0;
  }
    break;
  }
  // timer++;
  // //5*60 = 5 seconds because draw renders 60 times per second
  // //somethign about frame rate refreshing and 229 and 360?
  // if(timer >= 5*60){
  //   timer = 0 ;
  //   print("beep") ;
  // }
}

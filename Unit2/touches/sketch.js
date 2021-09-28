let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("Please touch the screen.", 5, 22) ;
      //image
      break ;

      case 1:
       text("Plus, one more.", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("Just one more.", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("Yay!", 5, 22) ;
            // put a picture here
      break ;


  }

}

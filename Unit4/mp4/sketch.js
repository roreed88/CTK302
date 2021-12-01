// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;
var bounceB;
var robot;
var backdrop;
var cloud1;
var cloud2;
var cloud3;
var planet2;
var planet3;
var planet4;
var font1;
var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var sound1;
var sound2;

// var bunnyImage;
var cars = [];
var frogPos;

function preload() {
    sound1 = loadSound('assets/8bit.mp3');

    sound1.loop();
    sound1.pause();

    sound2.play();
    sound2.pause();
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;


  // spawn a bunch of cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

//images
    bounceB = loadImage('assets/bounceBack.png');
    robot = loadImage('assets/robot1.png');
    backdrop = loadImage('assets/backdrop.png');
    cloud1 = loadImage('assets/cloud1.png');
    cloud2 = loadImage('assets/cloud2.png');
    cloud3 = loadImage('assets/cloud3.png');
    planet2 = loadImage('assets/planet2.png');
    planet3 = loadImage('assets/planet3.png');
    planet4 = loadImage('assets/planet4.png');

//fonts
    font1 = loadFont('assets/madMecha.ttf');

    var myCityString = "https://api.openweathermap.org/data/2.5/weather?zip=61761,US&units=imperial&";

    var myIDString = "appid=9bff9390af403e063501a6d64abf9df7";

    var myBigString = myCityString + myIDString;

    loadJSON(myBigString, gotData);

  // initialize the frog's position
  frogPos = createVector(width / 2, height - 40);

  // load any images you need
  //bunnyImage = loadImage("assets/bunny.jpg");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function gotData(data) {
  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
}

function draw() {

  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

      case 1:
      background(255, 147, 31);

      noStroke();

      // MORE DECORATIONS - write that pretty ATK type on top.
      fill(0, 187, 249);
      textFont(font1);
      textSize(40);
      textAlign(CENTER);
      text("Catch the Robots with Bounce Back!", width/2, height/2.5, windowWidth - 200, windowHeight - 200);

      fill(0, 187, 249);
      rect(width/2, height/2, 140, 50, 10);

      fill(255, 147, 31);
      textFont(font1);
      textSize(30);
      textAlign(CENTER);
      text("START!", width/1.96, height/1.23, windowWidth - 200, windowHeight - 200);

      break;

      case 2:

      sound1.loop();

      state = 3;

      break;

      case 3:

      background(255, 147, 31);

      image(backdrop, width/2, height/2, windowWidth, windowHeight);

      image(cloud1, c1, height/2, widowWidth, windowHeight);

      c1 = c1 + windspeed/2;
      if (c1 > width + 125) c1 = -125;

      image(planet2, width/2, height/2, windowWidth, windowHeight);

      image(cloud2, c2, height/2, windowWidth, windowHeight);

      c2 = c2 + windspeed/2.5;
      if (c2 > width + 125) c2 = -125;

      image(planet3, width/2, height/2, windowWidth, windowHeight);

      image(cloud3, c3, height/2, windowWidth, windowHeight);

      c3 = c3 + windspeed/1.75;
      if (c3 > width + 125) c3 = -125;

      image(planet1, width/2, height/2, windowWidth, windowHeight);

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);


  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // draw the FROG
  image(bounceB, 0, 0, 95, 115);
  // fill('green');
  // ellipse(0, 0, 80, 80);
  pop();


  // update the frog's position using the accelerometer data
  frogPos.x = xPosition;
  frogPos.y = yPosition;

  // iterate through the car loop to move them and see if we need to delete cars
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
    break;

  // Debugging information -- take this out when you're ready for production!
  // Just a bunch of text commands to display data coming in from addEventListeners
  // textAlign(LEFT);
  // textSize(20);
  // fill('black');
  // text("orientation data:", 25, 25);
  // textSize(15);
  // text("alpha: " + alpha, 25, 50);
  // text("beta: " + beta, 25, 70);
  // text("gamma: " + gamma, 25, 90);
  // textSize(20);
  // text("acceleration data:", 25, 125);
  // textSize(15);
  // text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y, 25, 170);
  // text("z = " + z, 25, 190);


}
}

function mouseReleased() {
  if ((myState == 1) && (mouseX > width/1.96 - 70) && (mouseX < width/1.96 + 70) && (mouseY > height/1.23 -25) && (mouseY < height/1.23 + 25)) {
    state = 2;
  }
}

function deviceShaken() {
  // re-spawn cars
  cars = []; // clear the array first
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});





// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  // this.r = random(255);
  // this.g = random(255);
  // this.b = random(255);
  // this.a = random(255);  // alpha opacity value for fill!


  // methods
  this.display = function() {

    // maybe use an image here instead!
    // fill(this.r, this.g, this.b, this.a);
    // ellipse(this.pos.x - 50, this.pos.y, 50, 50);
    // ellipse(this.pos.x + 50, this.pos.y, 50, 50);
    // rect(this.pos.x + 17, this.pos.y - 30, 80, 60) ;
    image(robot, this.pos.x, this.pos.y, 100, 115);

  }

  this.drive = function() {
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

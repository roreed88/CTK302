// Note - you must change line 19 to your own APPID to get this to work!

//JSON java script object notation
//API application program interface
//getting specific weather variables weather.wind.speed, weather.

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var windspeed = 0;
var temp = 0;
var humid = 0;
var feel = 0;
var f1;
var cloud1;
var cloud2;
var cloud3;
var c1 = 0;
var c2 = 0;
var c3 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // HERE is the call to get the weather.

  cloud1 = loadImage('assets/cloud1.png');
  cloud2 = loadImage('assets/cloud2.png');
  cloud3 = loadImage('assets/cloud3.png');

  imageMode(CENTER);

  var myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Mobile,AL,US&units=imperial&";

  //You can also use "zipcode" - var myIDString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = "appid=9bff9390af403e063501a6d64abf9df7"; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  f1 = loadFont('assets/king.TTF');
  textAlign(CENTER);

  loadJSON(myBigString, gotData); // that gotData (callback) function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  humid = weather.main.humidity;
  feel = weather.main.feels_like;

}

function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(66, 135, 245);

      image(cloud1, c1, height/2, 720, 1280);

      c1 = c1 + windspeed/2;
      if (c1 > width + 300) c1 = -125;

      image(cloud2, c2, height/2, 720, 1280);

      c2 = c2 + windspeed/3;
      if (c2 > width + 125) c2 = -300;

      image(cloud3, c3, height/2, 720, 1280);

      c3 = c3 + windspeed/2.5;
      if (c3 > width + 300) c3 = -125;

      // move the cloud's x position
      // x = x + windspeed/2.5;
      // if (x > width + 125) x = -125;

      fill(235, 161, 52);
      textFont(f1);
      textSize(30);
      text("What is the weather in\n" + weather.name + "?" + "\nWindspeed is\n" + windspeed + " mph" + "\nTemperature is\n" + temp + " degrees" + "\nFeels like\n" + feel + " degrees" + "\nHumidity is\n" + humid, width/2, height/2);

      // text("Windspeed " + windspeed + " mph", 40, 100);
      // text("Temperature " + temp + "*F", 40, 140);
      // text("Feels like " + feel + "*F", 40, 180);
      // text("Humidity " + humid + "%", 40, 220);

      break;
  }
}

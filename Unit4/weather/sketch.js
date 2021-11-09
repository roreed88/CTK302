// Note - you must change line 19 to your own APPID to get this to work!

//JSON java script object notation
//API application program interface
//getting specific weather variables weather.wind.speed, weather.

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temp = 0;
var humid =0;
var feel = 0;
var f1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // HERE is the call to get the weather.

  var myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Mobile,AL,US&units=imperial&";

  //You can also use "zipcode" - var myIDString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = "appid=9bff9390af403e063501a6d64abf9df7"; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  f1 = loadFont('assets/king.ttf');
  textAlign(LEFT);

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

      // cloud
      fill("white");
      noStroke();
      ellipse(x, 300, 150, 100);
      ellipse(x - 50, 275, 100, 75);
      ellipse(x + 50, 320, 75, 75);

      // move the cloud's x position
      x = x + windspeed/2.5;
      if (x > width + 125) x = -125;

      fill(235, 161, 52);
      textFont(f1);
      textSize(30);
      text("What is the weather in " + weather.name + "?" + "\nWindspeed is " + windspeed + "\nTemperature is " + temp + "\nFeels like " + feel + "\nHumidity is " + humid, 40, 60);

      // text("Windspeed " + windspeed + " mph", 40, 100);
      // text("Temperature " + temp + "*F", 40, 140);
      // text("Feels like " + feel + "*F", 40, 180);
      // text("Humidity " + humid + "%", 40, 220);

      break;
  }
}

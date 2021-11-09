var bubbles = [];
let url = "";

function setup() {
  let key = "1BhbCvcJX4ETsjB4uO3rKav8ntoh9NTSpgTdzDT2z04M"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        // data[i]["Timestamp"],
        data[i]["What is Your Name?"],
        data[i]["Which color is better?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(name, color) {
    // only the order of these parameters matters!
    this.name = name;
    this.color = color;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(1, 3), 0);
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.name + "\n" + this.color + "\n",
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel);
    if(this.pos.x > width) this.pos.x = 0;

  }
}

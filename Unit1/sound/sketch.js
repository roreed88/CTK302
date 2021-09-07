let s1 ;

function preload() {
  s1 = loadSound('assets/jazzyFrench.mp3') ;
}

function setup() {
  createCanvas(500, 500) ;
  s1.loop()
}

function draw() {
  background(104, 247, 147) ;
}

function mouseReleased() {
  if (s1.isPlaying()){
    s1.pause() ;
  } else {
    s1.loop() ;
  }
}

function touchStarted() {
  getAudioContext().resume();
}

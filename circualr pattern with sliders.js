
var n = 0;
var c = 3;


var points = [];

var start = 0;
var sli;
var ang;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
  sli = createSlider(0.3,0.7,0.3,0.001);
  ang = createSlider(100.0,360.0,137.5,0.5);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(n * sli.value());
  for (var i = 0; i < n; i++) {
    var a = i * ang.value();
    var r = c * sqrt(i+ang.value());
    var x = r * sli.value()*cos(a);
    var y = r * sin(a + pow(sli.value(),2));
    var hu = sin(start + i * 0.5);
    hu = map(hu, -1, 1, 0, 360);
    fill(hu, 255, 255);
    noStroke();
    ellipse(x, y, 4, 4);
  }
  n += 5;
  start += 5;
  console.log(sli.value());
}

function setup() {
  createCanvas (400, 400);
  background (300);
}

function draw() {
  for (var i = 5; i <= 195; i = i + 5){
    var rad = i;
    ellipseMode (RADIUS);
    noFill();
    ellipse (200, 200, rad, rad);
  }
}

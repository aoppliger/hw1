function setup() {
  createCanvas (600, 200);
  background (300);
}

function draw() {
  for (var b = 75; b < 600; b = b + 150){
    var dis = b;
    for (var a = 25; a <= 100; a = a + 25){
      var h = a;
      var w = a;
      rectMode (CENTER);
      rect (dis, 100, h, w);
      noFill();
    }
  }
}

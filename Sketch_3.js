function setup() {
  createCanvas (400, 400);
  background (300);
}

function draw() {
  for (var i = 5; i <= 400; i = i + 5){
    var x = i;
    var y = i;
    line (x, 0, x, y);
  }
}

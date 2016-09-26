function setup() {
  createCanvas (400, 400);
  background (300);
}

function draw() {
  for (var i = 5; i <= 200; i = i + 10){
    var x1 = 200 - i;
    var y = i;
    var x2 = 200 + i;
    line (x1, y, x2, y);
  }
  for (var a = 200; a >= 10; a = a - 10){
    var x3 = 200 + a;
    var y2 = 400 - a;
    var x4 = 200 - a;
    line (x3, y2, x4, y2);
  }
}

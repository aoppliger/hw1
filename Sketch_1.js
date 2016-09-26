function setup() {
  createCanvas (400, 400);
  background (255);
}

function draw() {
  for (a = 10; a <=380; a = a + 10){
    var x = a;
    line (x, 390, 200, 10);
    stroke (0);
  }
}

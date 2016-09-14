// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match

var direction;

function initial(){
  right();
  var color = getColor();
  if (getColor() == "red"){
    direction = "up";
    up();
    up();
    up();
  }else{
    direction = "down";
    down();
    down();
    down();
  }
}

function second(){
  var color = getColor();
  if (getColor() == "red"){
    left();
  }else{
    right();
  }
  if (direction == "up"){
    up();
  }else{
    down();
  }
}

initial();
second();

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

var steps;

function move(direction){
  for (steps = 0; steps < 8; steps = steps + 1){
    direction();
  }
  right();
}

move(down);
right();
move(up);
right();
move(down);
right();
move(up);
right();
move(down);

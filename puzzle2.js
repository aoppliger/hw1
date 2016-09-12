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

function travel (direction, count){
  	var steps = 0;
    while (steps < count) {
      direction ();
      steps = steps + 1;
    }
}

travel (down, 6);
travel (right, 3);
travel (up, 2);
travel (right, 2);
travel (down, 3);

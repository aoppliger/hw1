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


travel (down, 4);
travel (right, 1);
var color = getColor();
travel (down, 1);
setColor(color);
travel (right, 2);
travel (up, 1);
travel (right, 1);
color = getColor();
travel (down, 1);
setColor(color);
travel (right, 2);

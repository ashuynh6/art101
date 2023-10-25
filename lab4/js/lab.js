// Connect Four
// An implementation of the game
// Ashley Huynh <asthhuyn@ucsc.edu>
// October 23 2023

// initialize the grid with empty cells
// set up two players, each with a set of pieces
// Main game loop:
  // display the current state of the grid
  // ask the current player for their move and chosen column
  // if the move is valid:
    // place the player's token in the specified column on the board
    // check for a win:
      // four consecutive pieces of a player aligned vertically, horizontally, or diagonally
      // display the winner
    // check for a tie:
      // all the grid cells are filled and check-for-win doesn't apply to either players
      // declare a draw
    // switch to the next player
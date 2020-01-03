let ranks = 8;

for (let i = 0; i < ranks; i++) {
    if (i % 2 === 0) {
        console.log(" # # # #");
    } else if (i % 2 === 1) {
        console.log("# # # # ");
    }
}

/*

Solution Haverbeke

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

*/

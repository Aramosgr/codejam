const fs = require('fs');

// If you run this locally, leave the code like this.
// If you want to run this in the google website, replace './input.txt' for 0. (this will read from the input instead of the file)
const input = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').slice(1);
input.forEach((values, i) => {
  console.log(`Case #${i + 1}:`);
  solve(...values.split(' '));
});

function solve(rows, columns) {
  let line = 'My solution is:';
  console.log(`${line}`);
}

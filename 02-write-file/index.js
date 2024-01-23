const readline = require('readline');
const fs = require('fs');
const path = require('path');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.promises
  .writeFile(path.resolve(__dirname, '02-write-file.txt'), '')
  .catch((err) => console.log(err));

console.log('Привет! Введите текст, который хотите записать:');

read.on('line', (answer) => {
  if (answer === 'exit') {
    console.log('До новых встреч!');
    process.exit();
  }
  fs.promises
    .appendFile(path.resolve(__dirname, '02-write-file.txt'), `${answer}\n`)
    .catch((err) => {
      console.log(err);
      process.exit();
    });
});

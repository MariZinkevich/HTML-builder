const readline = require('readline');
const fs = require('fs');
const path = require('path');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.writeFile(path.resolve(__dirname, '02-write-file.txt'), '', (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

console.log('Привет! Введите текст, который хотите записать:');

read.on('line', (answer) => {
  if (answer === 'exit') {
    console.log('До новых встреч!');
    process.exit();
  }
  fs.appendFile(
    path.resolve(__dirname, '02-write-file.txt'),
    `${answer}\n`,
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
    },
  );
});

const fs = require('fs');
const path = require('path');

fs.promises
  .readFile(path.resolve('01-read-file', 'text.txt'), 'utf-8')
  .then((content) => process.stdout.write(content))
  .catch((err) => console.log(err));

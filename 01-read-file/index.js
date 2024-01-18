const fs = require('fs');
const path = require('path');
const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
const pathToFile = path.resolve('01-read-file', 'text.txt');

eventEmitter.on('start', () => {
  fs.readFile(pathToFile, 'utf-8', (err, content) => {
    if (err) {
      console.log(err);
      return;
    }
    process.stdout.write(content);
  });
});
eventEmitter.emit('start');

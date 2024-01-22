//ребяяяяят, если есть возможность дайте пожалйста времени до 23.01 до 19.00, я не успела(((
const fs = require('fs');
const path = require('path');

fs.promises.writeFile(path.resolve(__dirname, 'project-dist', 'bundle.css'), '')
.catch(err => console.log(err))

fs.promises.readdir(path.resolve(__dirname, 'styles'))
 .then((files) => {
  for (let i = 0; i < files.length; i++) {
    if (path.parse(files[i]).ext === '.css') {
      fs.promises
      .readFile(path.resolve(__dirname, 'styles', files[i]),'utf-8')
      .then(data => {       
        fs.promises.appendFile(path.resolve(__dirname, 'project-dist', 'bundle.css'),data)})
    }
  }
})
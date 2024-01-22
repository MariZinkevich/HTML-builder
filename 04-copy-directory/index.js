const fs = require('fs');
const path = require('path');

fs.promises
  .readdir(path.resolve(__dirname))
  .then((files) => {
    if(files.includes('files-copy')){
      fs.promises.rm(path.resolve(__dirname, 'files-copy'), {recursive: true});
    }
    })
  .then(()=>{
    fs.mkdir(path.resolve(__dirname, 'files-copy'), { recursive: true }, (err) => {
        if (err) {
          console.log(err);
        }
    });
    fs.readdir(path.resolve(__dirname, 'files'), (err, files) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < files.length; i++) {
          fs.copyFile(
            path.resolve(__dirname, 'files', files[i]),
            path.resolve(__dirname, 'files-copy', files[i]),
            (err) => {
              if (err) {
                console.log(err);
              }
            },
          );
        }
        console.log('Копирование завершено');
      }
      });
    });



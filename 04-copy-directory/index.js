
const fs = require('fs');
const path = require('path');

fs.promises.readdir(path.resolve(__dirname))
.then((files) => {
  if(files.includes('files-copy')){
    fs.promises.rm(path.resolve(__dirname, 'files-copy'), {recursive: true})
    .then(startCopy)
  } else {
    startCopy();
  }
})

    


function startCopy(){
  fs.promises.mkdir(path.resolve(__dirname, 'files-copy'), { recursive: true })
  .then(()=>{
    fs.promises.readdir(path.resolve(__dirname, 'files'))
    .then((files) => {
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
    });
  })
}



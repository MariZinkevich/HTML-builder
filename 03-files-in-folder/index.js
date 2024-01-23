const fs = require('fs');
const path = require('path');

fs.promises
  .readdir(path.resolve(__dirname, 'secret-folder'), { withFileTypes: true })
  .then((files) => {
    for (let i = 0; i < files.length; i++) {
      if (!files[i].isDirectory()) {
        fs.promises
          .stat(path.resolve(__dirname, 'secret-folder', files[i].name))
          .then((stat) => {
            console.log(
              `${path.parse(files[i].name).name} - ${path
                .parse(files[i].name)
                .ext.slice(1)} - ${stat.size} bytes`,
            );
          });
      }
    }
  })
  .catch((err) => console.log(err));

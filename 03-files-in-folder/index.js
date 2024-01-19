const fs = require('fs');
const path = require('path');

fs.readdir(
  path.resolve(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, files) => {
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < files.length; i++) {
        if (!files[i].isDirectory()) {
          fs.stat(
            path.resolve(__dirname, 'secret-folder', files[i].name),
            (err, stat) => {
              console.log(
                `${path.parse(files[i].name).name} - ${path
                  .parse(files[i].name)
                  .ext.slice(1)} - ${stat.size} bytes`,
              );
            },
          );
        }
      }
    }
  },
);

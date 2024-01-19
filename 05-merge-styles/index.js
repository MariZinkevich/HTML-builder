const fs = require('fs');
const path = require('path');

fs.writeFile(path.resolve(__dirname, 'project-dist', 'bundle.css'), '', (err) => {
    if (err) {
      console.log(err);
      return;
    }
});

fs.readdir(path.resolve(__dirname, 'styles'), (err, files)=>{
    if(err) {
        console.log(err)
    } else {
        for(let i = 0; i < files.length; i++){
            if(path.parse(files[i]).ext === '.css') {
                fs.readFile(path.resolve(__dirname, 'styles', files[i]), 'utf-8', (err, data)=>{
                    if(err) {
                        console.log(err)
                    } else {
                        fs.appendFile(path.resolve(__dirname, 'project-dist', 'bundle.css'), data, (err) => {
                            if(err) {
                                console.log(err)
                            }
                        })
                    }
                })
            }
        }
    }
})
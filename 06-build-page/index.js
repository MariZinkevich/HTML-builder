//ребяяяяят, если есть возможность дайте пожалйста времени до 23.01 до 19.00, я не успела(((

const fs = require('fs');
const path = require('path');



fs.promises.readFile(path.resolve(__dirname, 'template.html'), 'utf-8')
.then((template)=>{
    fs.promises.readFile(path.resolve(__dirname, 'components', 'header.html'), 'utf-8')
    .then((header) =>{
        let concatHeader = template.replace('{{header}}', header);
    })
})


const fs = require('fs');

const file = './db/data.json';


const saveDB = (data) => {
    //Objeto JSON con su metodo para guardar un objeto 
    //en un JSON STRING
    fs.writeFileSync(file, JSON.stringify(data));
}

const readDB = () => {
    if ( !fs.existsSync(file) ) {
        return null;
    }

    const info = fs.readFileSync(file, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    // console.log(data);

    return data;
}

module.exports = {
    saveDB,
    readDB
}
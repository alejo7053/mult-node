// requireds
const fs = require('fs');

let listar = (base) => {
    if (!base) base = 10
    let data = '';
    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }

    console.log(data);
}

let miArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

            console.log('The file has been saved!');
        });
    });
}

module.exports = {
    miArchivo,
    listar
}
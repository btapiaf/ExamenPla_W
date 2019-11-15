const fs = require('fs');
//cre una variable que se llame data
let guardar = (file,country,year) => {
    return new Promise((resolve, reject) => {
        if (!Number(year)){
            reject(`Valor ${year} no es numero`)
            return;
        }
        let data = 'algo'; 
        fs.writeFile(`resultados/${country}-${anio}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`${country}-${anio}.txt`);
        });
    })
}
let mostrar = (file,country,year) => {
    return new Promise((resolve, reject) => {
        if (!Number(year)){
            reject(`Valor ${year} no es numero`)
            return;
        }
        const csv = require('csv-parser');
        const fs = require('fs');
        fs.createReadStream(`${file}`)
        .pipe(csv())
        .on('data', (row) => {
          console.log(row)
            resolve(row);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
    })
}

module.exports = {
    //Se puede dar un nombre de propiedad por ejemplo crearArchivo: crearArchivo
    guardar,
    mostrar
};
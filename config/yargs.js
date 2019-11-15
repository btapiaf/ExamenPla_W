let opt = {
    archivo:{
        demand: true,
        alias:`f`,
        description: `Permite establecer el path del archivo CSV que contiene los datos a analizar`
    },
    pais:{
        default:'Ecuador',
        alias:`c`,
        description: 'Permite determinar el país a analizar a través de su código'
    },
    anio:{
        alias:`y`,
        default: 1960,
        description: 'Permite especificar el año para el cual se requiere las estadísticas.'
    }
}

const argv = require('yargs')
.command('mostrar','publica los datos de los paises',opt)
.command('guardar','Guarda los datos de los paises',opt)
.help()
.argv;


module.exports = {
    argv
};
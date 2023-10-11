const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Límite de la tabla deseada'
                })
                .check((argv,options) => {
                    if(isNaN(argv.b)){
                        throw 'Error, la base tiene que ser un número';
                    }
                    return true; //Si no hay errores después de las verifiaciones
                })
                .argv;

module.exports = argv;
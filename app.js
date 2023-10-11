const {multiplicar} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors')

// Esta es una forma de pedir argumentos por consola, pero es mejor con yargs
// const [ , , argBase='base=5'] = process.argv;
// const [, base = '5' ] = argBase.split('=');


multiplicar(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'.green.underline.yellow))
.catch(error => console.log(error));

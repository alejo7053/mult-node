const argv = require('./config/yargs').argv;

const { miArchivo } = require('./multiplicar/multiplicar.js')
const { listar } = require('./multiplicar/multiplicar.js')

// let base = 2;

// console.log(process.argv);
let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log(argv);
console.log(argv.base);
// console.log(argv2);

// listar();

// console.log(base);
// miArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`));
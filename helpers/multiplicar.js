const fs = require("fs");
const colors = require('colors');


const multiplicar = async (base, listar, limite) => {
  try {
    let resultado = "";
    let consola = "";
    
    for (let i = 1; i <= limite; i++) {
      resultado += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.yellow} ${i} ${'='.bgYellow.black}  ${base * i}\n`;
    }

    if (listar){
      console.log("---------------------------");
      console.log(`Tabla ${base}`.red.underline.green);
      console.log("---------------------------");
      console.log(consola);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, resultado);

    return `tabla-${base}.txt`.rainbow;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  multiplicar,
};

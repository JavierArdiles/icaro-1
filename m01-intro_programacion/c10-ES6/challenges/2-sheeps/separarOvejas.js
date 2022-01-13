const fs = require('fs');

const sheep = JSON.parse(fs.readFileSync('./sheeps.JSON', 'utf-8'));

function contarOvejas(ovejas) {
  let ovejasFiltradas = ovejas.filter(oveja => oveja.color == 'rojo' && oveja.name.toLowerCase().includes('a') && oveja.name.toLowerCase().includes('n'));
  return ovejasFiltradas;
}

console.log(contarOvejas(sheep));
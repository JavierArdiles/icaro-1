const fs = require('fs');

// var menuDelDia = {
//         raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
//         bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
//         tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
// }

const menuDelDia = JSON.parse(fs.readFileSync('./ingredients.JSON', 'utf-8'));

// function ingredienteEnMalEstado (menu, comida, ingrediente) {
//     let ingredientesEnMalEstado = [];

//     if (menu.hasOwnProperty(comida)) {
//         for (let i = 0; i < menu[comida].length; i++) {
//             if(menu[comida][i] === ingrediente) {
//                 ingredientesEnMalEstado.push(menu[comida][i - 1], menu[comida][i], menu[comida][i + 1])
//             }
//         }
//         if (ingredientesEnMalEstado.length > 0) {
//             return ingredientesEnMalEstado;
//         } else {
//             return "El menú está perfecto"
//         }
//     } else {
//         return "Lo siento, no tenemos eso en el menú"
//     }
// }

// console.log(ingredienteEnMalEstado(menuDelDia, "locro", "Tomates"));

// function ingredienteEnMalEstado(menu, comida, ingrediente){
//     if(!menu.hasOwnProperty(comida)) return "Lo siento, no tenemos eso en el menú";
//     let found = menu[comida].some(ingredientes => ingredientes == ingrediente);
//     if(!found) return "El menú está perfecto";
//     let i = menu[comida].indexOf(ingrediente);
//     let ingredientesEnMalEstado = [menu[comida][i - 1], menu[comida][i], menu[comida][i + 1]];
//     return ingredientesEnMalEstado;
// }


function ingredienteEnMalEstado(menu, comida, ingrediente) {
    if (!menu[comida]) return 'No servimos esa comida';
    let ingredienteEncontrado = menu[comida].find(elemento => elemento == ingrediente);
    if (!ingredienteEncontrado) return "El menú está perfecto";
    let indice = menu[comida].indexOf(ingredienteEncontrado);
    let array = [];
    if (menu[comida][indice - 1]) array.push(menu[comida][indice - 1]);
    array.push(ingredienteEncontrado);
    if (menu[comida][indice + 1]) array.push(menu[comida][indice + 1]);
    return array;
}
console.log(ingredienteEnMalEstado(menuDelDia, "asdasdasd", "asdadasd"));

function ingredienteEnMalEstado(menu, comida, ingrediente) {
    if( !menu[comida] ) return "No servimos esa comida";
    let array = [];
    for(let i = 0; i < menu[comida].length; i++){
        if( menu[comida][i] == ingrediente ) {
            if( menu[comida][i - 1] ) array.push(menu[comida][i - 1]);
            array.push(ingrediente);
            if( menu[comida][i + 1] ) array.push(menu[comida][i + 1]);
        }
    };
    if( array.length != 0 ) return array;
    return "El menú está perfecto";
}

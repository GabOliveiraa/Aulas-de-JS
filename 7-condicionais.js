console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis: ");
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); // removendo item
// }else {
//     // A pessoa é menor de idade
//     if(estaAcompanhada) {
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1,1); // removendo item
//     } else {
//         console.log("Não é maior de idade");
//     }
// }

if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(1,1); // removendo item
} else {
    console.log("Não é maior de idade");
}

console.log("\nEmbarque:");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!!");
}else {
    console.log("Não pode embarcar.");
}


console.log(listaDeDestinos);
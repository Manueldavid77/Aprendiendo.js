let banco = 200;
let retiro = 100;

if (retiro < banco) {
  console.log('Retira tu dinero');
} else {
  console.log('SALDO INSUFICIENTE');
}

let nota = 10;

if ((nota === 10)) {
  console.log('Excelente');
} else if ((nota === 5)) {
  console.log('Debes mejorar');
} else if ((nota === 0)) {
  console.log('Reprobado');
} else {
  return;
}



let punto = 3

switch(punto){
  case 10:
          console.log("Excelente Trabajo")
          break;
  case 1: 
          console.log("Reprobaste")
          break;
  default:
          console.log("Error")
          break;
}
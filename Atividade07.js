/*************************************************** 
                Lista de Exercícios 
*******************************************************/
/*
Dado a matriz abaixo, faça um programa em JavaScript que exiba ao usuário os elementos da sua diagonal principal
| 3  5  8 |
| 1  9  2 |
| 7  1  4 |
*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++)
    coluna == linha &&
      console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
}

console.log("\n--------------------------------------------------");
/*
Dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos por um valor x e exiba ao usuário a matriz antes e após a multiplicação.
| 3  5  8 |
| 1  9  2 |
| 7  1  4 |
*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
var x = 4;
console.table(matriz);
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    matriz[linha][coluna] *= x;
  }
}
console.table(matriz);

//Faça um loop FOR onde apresente os números ímpares de 0 a 10
for (let i = 0; i <= 100; i += 2) {
  //console.log( "Números pares de 0-100");
  console.log(i);
}
for (let i = 1; i <= 100; i += 2) {
  //console.log("Números ímpares de 0-100");
  console.log(i);
}
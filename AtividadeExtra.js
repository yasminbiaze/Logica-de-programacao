/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------


2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.


📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.


📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
------------------------------------------------------------------------


5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.


📌 Exemplo:
Entrada: 8, 3, 5, 1, 9  
Saída: 1, 3, 5, 8, 9 
------------------------------------------------------------------------
*/
//1
const imparpar = (num) => {
  return num % 2 == 0 ? "É par!" : "O número é impar!";
};
console.log(imparpar(10));
console.log(imparpar(3));
console.log(imparpar(2));

// 2
var tabuada = 5;
console.log(tabuada, "x 1 = ", tabuada * 1);
console.log(tabuada, "x 2 = ", tabuada * 2);
console.log(tabuada, "x 3 = ", tabuada * 3);
console.log(tabuada, "x 4 = ", tabuada * 4);
console.log(tabuada, "x 5 = ", tabuada * 5);
console.log(tabuada, "x 6 = ", tabuada * 6);
console.log(tabuada, "x 7 = ", tabuada * 7);
console.log(tabuada, "x 8 = ", tabuada * 8);
console.log(tabuada, "x 9 = ", tabuada * 9);
console.log(tabuada, "x 10 = ", tabuada * 10);

//3
console.log("Fatorial de 5! =", 5 * 4 * 3 * 2 * 1);

//4
let numeros = [10, 20, 30, 40];
let soma = numeros[0] + numeros[1] + numeros[2] + numeros[3];
console.log("A soma de todos os números é:", soma);

//5
const ordemNumero = [8, 3, 5, 1, 9];
console.log(ordemNumero);
console.log(ordemNumero.sort());

console.log(
  "---------------------------------------------------------------------------"
);

// estourando o cartão - versão while - ultilizando o navegador
// 1- Crie uma varíavel e solicite o seu nome;
// 2- Crie uma variável e solicite o nome de um banco;
// 3- Crie uma variável e atribua o número da agência;
// 4- Crie uma variável e solicite ao usuário o número da conta;
// 5- Crie uma variável e solicite ao usuário o saldo da conta;
// 6- Exiba ao usuário os dados e o saldo da conta;
// 7- Efetue e exiba ao usuário 5 movimentações na conta utilizando o laço while com valores aleatório;
// 8- Exiba ao usuário novamento os dados e o saldo da conta;

/*var nome = prompt("Informe seu nome:");
var banco = prompt("Informe seu banco:");
var agencia = prompt ("Informe sua agência:");
var conta = prompt ("Informe sua conta");
var saldo =prompt ("Informe seu saldo:");
console.log(`Olá ${nome}! Seu banco ${banco} numero de conta: ${conta} | seu saldo é ${saldo}`)*/

var contador = 1;
while (contador <= 5) {
  let gasto = Math.random()*100; //Valor aleatório entre 0 e 99.999...
  contador -= gasto;
  contador++;
}
//console.log(saldo.toFixed(2));//Deixa o valor decimal somente com 2
console.log(`Olá ${nome}! Seu banco ${banco} numero de conta: ${conta} | seu saldo é ${saldo.toFixed(2) }`)

// Jogo cara e coroa - melhor de três rodadas - aleatório - DO-WHILE
//apresentar um placar das rodadas ex:
var i = 1;
var cara = 0;
var coroa = 0;


do {
    let face  = Math.random() * 100;
    face < 50 ? cara++ : coroa++;
    i++;
} while (i <= 3);

console.log("---------------------------------------")
console.log("-------------------Score---------------")
console.log("----------------------------------------")
console.log(`cara: ${cara}`);
console.log(`coroa: ${coroa}`);
console.log("------------------------------------------")


/***********************************************************************************
 *             LISTA DE XERCÍCIOS MASTER
 /*
 Supondo que a população de um país A seja de a habitantes com uma 
 taxa anual de crescimento de 3% e que a população de um país B seja 
 de b habitantes, com uma taxa anual de crescimento de 1,5%, fazer um 
 algoritimo que calcule e escreva o número de anos necessários para que
  a população do país B, mantidas essas taxas de crescimento
  */

  var a = 800000;
  var b = 950000;
  var anos = 0;

  while(a<b){
    anos++ 
    a += (a * 3) /100;
    b += (b* 1.5) /100;
    console.log(`Ano: ${anos} | População A: ${Math.round(a)} | População B: ${Math.round(b)}`);
  }
console.log(
  `A quantidade de anos para a população A superar ou igualar a B é de ${anos}`
);

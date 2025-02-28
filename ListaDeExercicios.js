//Lista de Exercicíos de Lógica e programação em JavaScript
// 1- Variáveis e Operações Matemáticas
//1. Declare três variáveis numéricas e exiba no console a soma, subtração, multiplicação e divisão entre elas.
console.log(`----------------------01---------------------------`);
let x = 5;
let y = 10;
console.log(`x =", x, "\ny =`, y);

let soma = x + y;
console.log(`A soma de x + y é =`, soma);

let subtracao = x - y;
console.log(`A subtracao de x-y é =`, x - y);

let divisao = x / y;
console.log(`A divisão de x / y é =`, divisao);

let multiplicacao = x * y;
console.log(`A multiplicacao de x * y é =`, multiplicacao);

//2. Crie três variáveis representando as notas de um aluno e calcule sua
//média. Se a média for maior ou igual a 7, exiba "Aprovado", senão, "Reprovado".
console.log(`-----------------------02--------------------------`);
var x2 = 7.0;
var y2 = 8.5;
var z = 9.0;
var media = (x2 + y2 + z) / 3;

if (media >= 7) {
  console.log(`Aprovado!`);
} else {
  console.log(`Reprovado!`);
}

//3. Dado um salário bruto de R$3.000,00, calcule o salário líquido
//considerando um desconto de 8% de INSS e 5% de imposto de renda.
console.log(`----------------------03---------------------------`);
var sBruto = 3000;
var DInss = sBruto * 0.08;
var DIr = sBruto * 0.05;
var sLiquido = sBruto - DInss - DIr;

console.log(`O valor do salário líquido é R$ ${sLiquido} reais`);

//4. Considere um círculo com raio de 7cm. Calcule e exiba a circunferência e a
//área do círculo (use Math.PI).
console.log(`-----------------------04--------------------------`);
Math.PI;
var raio = 7;
console.log(
  `Comprimento de uma circuferência de raio =`,
  raio,
  "cm :",
  2 * Math.PI * raio
);
console.log(`Área do circulo é =",${Math.PI * raio ** 2} `);

//5. Uma loja de eletrônicos vende celulares a R$1.500,00 cada e oferece
//desconto progressivo:
//o 5% para compras de 2 unidades;
//o 10% para compras de 3 unidades;
//o 15% para compras de 4 ou mais unidades. Exiba o valor final a pagar
//para cada quantidade.
console.log(`---------------------05----------------------------`);
console.log(
  `Você comprou 2 celulares por R$3.000 reias, logo recebeu um desconto de`,
  1500 * 2 * 0.05
);

console.log(
  `Você comprou 3 celulares por R$4.500 reias, logo recebeu um desconto de`,
  1500 * 3 * 0.1
);

console.log(
  `Você comprou 4 celulares por R$6.000 reias, logo recebeu um desconto de`,
  1500 * 4 * 0.15
);

//2. Estruturas Condicionais (IF, ELSE)
//6. Dado um número qualquer, exiba se ele é múltiplo de 3, múltiplo de 5 ou
//múltiplo de ambos.
console.log(`-----------------------06--------------------------`);
var numeros = 5;

if (numeros % 3 == 0) {
  console.log(`O número é multiplo de 3`);
} else {
  console.log(`O número não é multiplo de 3`);
}
var numeros = 5;

if (numeros % 5 == 0 && 5) {
  console.log(`O número é multiplo de 5`);
} else {
  console.log(`O número não é multiplo de 5`);
}

//7. Determine se um ano específico (exemplo: 2024) é bissexto (divisível por 4
//e não por 100, exceto se for divisível por 400).
console.log(`----------------------07---------------------------`);
const verificarAnoBissexto = (ano) => {
  if (ano % 400 === 0) {
    return console.log(`${ano} é bissexto porque é divisivel por 400.`);
  }
  if (ano % 100 === 0) {
    return console.log(
      `${ano} não é  bissexto porque é divisivel por 100, mas não por 400.`
    );
  }
  if (ano % 4 === 0) {
    return console.log(
      `${ano} é bissexto porque é divisivel por 4, mas não por 100.`
    );
  }

  return console.log(`${ano} não é bissexto porque não é divisivel por 4.`);
};

verificarAnoBissexto(2024);
verificarAnoBissexto(1900);
verificarAnoBissexto(3000);
verificarAnoBissexto(2869);

//8. Dado um número de 0 a 6, exiba o dia da semana correspondente (0 =
//Domingo, 1 = Segunda...).
console.log(`--------------------------08-----------------------`);
var numeros1 = 5;
switch (numeros1) {
  case 0:
    console.log(`domingo`);
    break;

  case 1:
    console.log(`segunda`);
    break;

  case 2:
    console.log(`terça`);
    break;

  case 3:
    console.log(`quarta`);
    break;

  case 4:
    console.log(`quinta`);
    break;

  case 5:
    console.log(`sexta`);
    break;

  case 6:
    console.log(`sabado`);
    break;

  default:
    console.log(`Opção invalida`);
    break;
}

//9. Se um motorista ultrapassar um limite de velocidade de 80km/h, ele será
// multado. Para cada km acima do limite, a multa custa R$5,00. Determine o
//valor da multa para um carro a 95km/h.
console.log(`------------------------09-------------------------`);
var km = 95;
var limite = 80;

if (km > limite) {
  console.log(`Você foi multado com R$ ${(km - limite) * 5}`);
} else {
  `Você não foi multado`;
}
//10. Crie um programa que, dado o preço de um produto, aplique um desconto
//conforme a seguinte tabela:
//o Menos de R$50,00: sem desconto.
//o Entre R$50,00 e R$100,00: 5% de desconto.
//o Acima de R$100,00: 10% de desconto
console.log(`------------------------10-------------------------`);
var valorCompra = 50;

if (valorCompra >= 50 && 100) {
  console.log(`Você tem um desconto de R$ ${valorCompra * 0.05}`);
} else if (valorCompra > 100) {
  console.log(`Você tem um desconto de R$ ${valorCompra * 0.1}`);
} else {
  console.log(`Não tem desconto`);
}

//3. Laços de Repetição (FOR, WHILE)
//11. Exiba todos os números pares entre 1 e 50.
console.log(`------------------------11-------------------------`);
for (let i = 0; i < 50; i++) {
  i % 2 == 0 && console.log(i);
}

//12. Exiba a tabuada do número 9 (de 9 × 1 até 9 × 10).
console.log(`------------------------12-------------------------`);
for (let i = 1; i < 11; i++) {
  console.log(i * 9);
}
//13. Some os números de 1 a 100 e exiba o resultado.
console.log(`-----------------------13--------------------------`);
var soma1 = 0;
var i = 1;
while (i <= 100) {
  soma1 += i;
  i++;
}
console.log(soma1);

//14. Dado um array [3, 5, 7, 9, 11], exiba a soma de seus elementos.
console.log(`-------------------------14------------------------`);
var numeros = [3, 5, 7, 9, 11];
console.log(numeros.length);
var somatoria = 0;
for (let i = 0; i < numeros.length; i++) {
  somatoria += numeros[i];
}
console.log(`Soma dos elementos:, ${somatoria}`);

//15. Crie um contador regressivo que comece em 10 e exiba cada número até 0.
console.log(`------------------------15-------------------------`);
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// 4. Vetores e Manipulação de Strings
//16. Crie um array com os dias da semana e exiba a quarta-feira.
console.log(`------------------------16-------------------------`);
var diaSemana = [
  `Segunda feira`,
  `Terça Feira`,
  `Quarta Feira`,
  `Quinta Feira`,
  `Sexta Feira`,
  `Sabado`,
  `Domingo`,
];
//17. Crie um array com cinco frutas e remova a terceira fruta da lista.
console.log(`------------------------17-------------------------`);
var frutas = [`Morango`, `Pitaya`, `Maracuja`, `Kiwi`, `Laranja`];
var posicao = frutas.indexOf(`Maracuja`);
frutas.splice(posicao, 1);
console.table(frutas);

//18. Crie um array de números e exiba apenas os números maiores que 10.
console.log(`------------------------18-------------------------`);
var array = [9, 10, 4, 60, 70]
for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
   console.log(array[i]); 
  } else{
    console.log();
  }
  
}

//19. Transforme a string "JavaScript é incrível!" em maiúsculas e exiba no
//console.
console.log(`------------------------19-------------------------`);
var frase = `JavaScript é incrivel!`;
console.log(frase.toUpperCase(frase));


//20. Dada a string "A vida é bela e cheia de desafios", exiba quantas palavras
//existem nela.
console.log(`------------------------20-------------------------`);


//21.Dado um vetor [12, 45, 67, 89, 23], exiba o maior número presente nele.
console.log(`------------------------21-------------------------`);
var vetor = [12, 45, 67, 89, 23]

 





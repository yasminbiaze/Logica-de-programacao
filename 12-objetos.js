//-----------------------------------------OBJETOS EM JAVASCRIPT-----------------------------------------------
//Defiindo uma classe em Javascript (Pessoa)

//1- Classe (o molde dos objetos) - singular
//class Pessoa{ //Criamos uma classe chamada pessoa (o molde)
//constructor(pNome, pIdade) { // O construtor é como um formulário
//this.nome = pNome;
//this.idade = pIdade;
//}

//2. Objeto: criando personagem/aluno
//var aluno1 = new Pessoa("Yasmin", 17); //criamos um aluno Yasmin com 17 anos
//aluno1 é um objeto baseado no molde Pessoa

//3. Métodos - Ações que um objeto pode fazer
class Pessoa {
  //Criamos uma classe chamada pessoa (o molde)
  constructor(pNome, pIdade) {
    // O construtor é como um formulário
    this.nome = pNome;
    this.idade = pIdade;
  }

  apresentarSe() {
    console.log(`Oi, meu nome é ${this.nome}, e eu tenho ${this.idade} anos.`);
  }

  envelhecer() {
    this.idade++;
  }
}

var aluno1 = new Pessoa("Yasmin", 17);
aluno1.apresentarSe(); //Oi meu nome é Yasmin, e eu tenho 17 anos.
aluno1.envelhecer();
aluno1.apresentarSe();

// Class: Molde para criar objetos, como ficha de aluno ou um modelo de jogador de futebol

// Objeto: Uma instância real do modelo como yasmin ou Neymar

// Atributo: Caracteristicas do objeto, como nome e idade

// Métodos: Ações que o objeto pode fazer, como falar sua idade ou envelhecer.

//---------------------------------------------------------//
//Crie uma class para jogador de futebol onde tenha nome, idade e posição
//O objeto criado com base no jogador de futebol poderá apresentar-se
//Da segunda forma: Olá, meu nome é "Neymar", tenho "33" anos e jogo na posição "Atacante"
//Crie 3 objetos e faça com que eles se apresentem

class Jogador {
  constructor(pNome2, pIdade2, pAtacante) {
    this.nome = pNome2;
    this.idade = pIdade2;
    this.posicao = pAtacante;
  }

  apresentarSe() {
    console.log(`Olá, meu nome  é ${this.nome},  eu tenho ${this.idade} anos, e jogo na posicao ${this.posicao}.`);
  }

}
var jogador1 = new Jogador("Neymar", 33, "Atacante");
jogador1.apresentarSe();

var jogador2 = new Jogador("Messi", 37, "Meio-Campista");
jogador2.apresentarSe();

var jogador3 = new Jogador("Cristiano Ronaldo", 40, "Atacante");
jogador1.apresentarSe();

//--------------------------------------------------------------------------------------------
//Criando classe retângulo
//-----------------------------------------------------------------------------------------------------//
//Criando classe Retângulo

class Retangulo {
    constructor(comprimento, largura) {
      this.comprimento = comprimento;
      this.largura = largura;
    }
  
    alterarComprimento(comprimento) {
      this.comprimento = comprimento;
    }
  
    alterarLargura(largura) {
      this.largura = largura;
    }
  
    obterArea() {
      return this.comprimento * this.largura;
    }
  }
  
  var ret = new Retangulo(10, 15);
  console.table(ret);
  
  //Apresentando valores (atributos) do objeto instanciado
  console.log(`Comprimento: ${ret.comprimento}`);
  console.log(`Largura: ${ret.largura}`);
  
  //Apresentando a área
  console.log(`Área: ${ret.obterArea()}`);
  
  //Alterando o comprimento do retangulo
  ret.alterarComprimento(20);
  console.table(ret);
  
  //Alterar a largura do retangulo
  ret.alterarLargura(30);
  console.table(ret);
  
  //Calculando a área
  console.log(`Área: ${ret.obterArea()}`);

       

/***************************************************************
 * LISTA DE EXERCÍCIOS 
 * ************************************************************
 */
// Crie uma class sorvete  contendo propriedades: sabor. preço e tamanho (P / M / G)
// Crie um sorvete de chocolate pequeno 
// Crie um sorvete de morango grande 
// Altere o preço do sorvete de morango grande para R$ 10,51.

class Sorvete {
    constructor(sabor, preco, tamanho) {
        this.sabor = sabor;
        this.preco = preco;
        this.tamanho = tamanho;
    }
}

var sorvete1 = new Sorvete("Chocolate", 3.50, "P")
var sorvete2 = new Sorvete("Morango", 3.5, "G")
var sorvete3 = new Sorvete("Pistache", 5, "M")

console.log(`Sorvete escolhido: ${sorvete1.sabor} | Valor: R${sorvete1.preco}`);

sorvete2.preco = 10.51;
console.table(sorvete2
);

sorvete3.tamanho = "G";
console.table(sorvete3);

//Lista de Exercicíos de Lógica e programação em JavaScript
// 1- Variáveis e Operações Matemáticas
//1. Declare três variáveis numéricas e exiba no console a soma, subtração, multiplicação e divisão entre elas.
let x = 5;
let y = 10;
console.log("x =", x, "\ny =", y);

let soma = x + y; 
console.log("A soma de x + y é =", soma); 

let subtracao = x - y;
console.log("A subtracao de x-y é =", x - y);

let divisao = x / y;
console.log("A divisão de x / y é =", divisao);

let multiplicacao = x * y;
console.log("A multiplicacao de x * y é =", multiplicacao);


//2. Crie três variáveis representando as notas de um aluno e calcule sua 
//média. Se a média for maior ou igual a 7, exiba "Aprovado", senão, "Reprovado".
var x2 = 7.0;
var y2 = 8.5;
var z = 9.0;
var media = (x2 + y2 + z) /3;

if (media >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}


//3. Dado um salário bruto de R$3.000,00, calcule o salário líquido 
//considerando um desconto de 8% de INSS e 5% de imposto de renda.
var sBruto = 3000;
var DInss = sBruto * 0.08;
var DIr = sBruto * 0.05;
var sLiquido = sBruto - DInss - DIr;

console.log(`O valor do salário líquido é R$ ${sLiquido} reais`);

//4. Considere um círculo com raio de 7cm. Calcule e exiba a circunferência e a 
//área do círculo (use Math.PI).
Math.PI;
var raio = 7;
console.log("Comprimento de uma circuferência de raio =", raio, "cm :",2*Math.PI*raio);

//5. Uma loja de eletrônicos vende celulares a R$1.500,00 cada e oferece 
//desconto progressivo: 
//o 5% para compras de 2 unidades; 
//o 10% para compras de 3 unidades; 
//o 15% para compras de 4 ou mais unidades. Exiba o valor final a pagar 
//para cada quantidade.
var 


//2. Estruturas Condicionais (IF, ELSE) 
//6. Dado um número qualquer, exiba se ele é múltiplo de 3, múltiplo de 5 ou 
//múltiplo de ambos.

//7. Determine se um ano específico (exemplo: 2024) é bissexto (divisível por 4 
 // e não por 100, exceto se for divisível por 400). 
 // 8. Dado um número de 0 a 6, exiba o dia da semana correspondente (0 = 
//  Domingo, 1 = Segunda...). 
 // 9. Se um motorista ultrapassar um limite de velocidade de 80km/h, ele será 
 // multado. Para cada km acima do limite, a multa custa R$5,00. Determine o 
 // valor da multa para um carro a 95km/h. 
 // 10. Crie um programa que, dado o preço de um produto, aplique um desconto 
 // conforme a seguinte tabela: 
  //o Menos de R$50,00: sem desconto. 
  //o Entre R$50,00 e R$100,00: 5% de desconto. 
 // o Acima de R$100,00: 10% de desconto. 
 
 // 3. Laços de Repetição (FOR, WHILE) 
 // 11. Exiba todos os números pares entre 1 e 50. 
 // 12. Exiba a tabuada do número 9 (de 9 × 1 até 9 × 10). 
 // 13. Some os números de 1 a 100 e exiba o resultado. 
 // 14. Dado um array [3, 5, 7, 9, 11], exiba a soma de seus elementos. 
 // 15. Crie um contador regressivo que comece em 10 e exiba cada número até 0. 
 
 // 4. Vetores e Manipulação de Strings 
  //16. Crie um array com os dias da semana e exiba a quarta-feira. 
  var diaSemana = [
    `Segunda Feira`,
    `Terça Feira`,
    `Quarta Feira`,
    `Quinta Feira`,
    `Sexta Feira`,
    `Sabado`,
    `Domingo`,
  ];
  console.log(diaSemana[2]);
  //17. Crie um array com cinco frutas e remova a terceira fruta da lista.
  var frutas = [`Morango`, `Pitaya`, `Maracuja`, `Kiwi`, `Laranja`];
  var posicao = frutas.indexOf("Maracuja");
  frutas.splice(posicao, 1);
  console.table(frutas);
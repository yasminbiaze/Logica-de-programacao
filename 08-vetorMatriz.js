// criando variaveis tipo array (VETOR)
var numeros = [1, 2, 3, 4, 5];
console.log(numeros); //imprimindo os dados do array
console.table(numeros); //imprime os dados em forma de tabela
console.log(numeros[1]); //imprimindo o item de indice
console.log("O vetor tem:", numeros.length, "elementos:");
var dinos = [
  "tiranossauro rex",
  "estegossauro",
  "anquilossauro,",
  "titanossauro",
];
console.log(dinos); //imprimindo os dados
console.table(dinos); //imprimindo os dados em forma de tabela
console.log("O vetor dinos tem:", dinos.length, "elementos.");
// adicionando elementos a um vetor existente
dinos.push("Brontossauro"); // adiciona um elemento no inicio do vetor
console.table(dinos);
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

dinos.unshift("tricerátops"); // adiciona um elemento no final do vetor
console.table(dinos);
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

//obtendo um elemento com base em se índice (posição
console.log("1ª posição:", dinos[0]);
console.log("3ª posição;", dinos[2]);
console.log("20ª posição;", dinos[19]); //quando não temos o item, apresenta um erro (undefined)

//Alterando elementos com base em seu índice (posição)
dinos[3] = "Velociraptor";
console.table(dinos);

//Removendo elementos do vetor
var dinos = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
];
dinos.pop(); //remove o último elemento de array (vetor)
console.table(dinos);

dinos.shift(); //Removendo o primeiro elemento do array (vetor)
console.table(dinos);

dinos.splice(1, 1); //Remove o elemento de índice 1 (a partir da posição 1, exclui 1 elemento)
console.table(dinos);

//Procurando o índice (posição) de elementos
var dinos = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodátilo",
  "Espinossauro",
];

console.table(dinos);
var elementoProcurado = "Pterodáctilo"
var posicao = dinos.indexOf (elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);

elementoProcurado = "Estegossauro";
posicao= dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);

elementoProcurado = "Castellosauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);
console.log("indexOf = -1 significa que o elemento não foi encontrado no vetor!")

//excluindo um elemento com base no seu nome 
var elementoExcluir = "Pterodáctilo";
var posicao = dinos.indexOf(elementoExcluir);
dinos.splice(posicao,1);
console.table(dinos);

// criando uma cópia de uma array (vetor)
var copia = dinos.slice();
console.log("Copiando um vetor!");
console.table(copia);

// criando uma array numérico
var numeros = [4,3,1,9,7,2];
console.table(numeros);

// imprimindo os elementos das posições impares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

//Verificando se o array contém um item 
console.log("contem 9:", numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("Contem 0:", contem0);

//Ordenanado os elementos do vetor 
numeros.sort();
console.table(numeros);

// Invertendo as posiçoes ou ordens dos itens
numeros.reverse();
console.table(numeros);

// Alterando o valor de um elemento com base em suas opção
numeros[2] = 5;
console.table(numeros);

numeros[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros [1];
console.table(numeros);

// Criando arrays hibridos 
var hibrido = [10, "Pafúncio", 3.45, "Zuleika", 7];
console.table(hibrido);

hibrido[1] = 9;
console.table(hibrido);

hibrido[0] = "Tibúrcio";
console.table(hibrido);



// Crianado uma Matriz
var matriz = [
  [9,0,1],
  [7,1,2],
  [1,3,9],
];
console.table(matriz);

// Obtendo elemento com base em seus indices
console.log("Matriz[1,2] =", matriz [1][2]);
console.log("Matriz [2,0] =", matriz [2] [0]);

// Alterando valores de lementos com base em seus indices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);

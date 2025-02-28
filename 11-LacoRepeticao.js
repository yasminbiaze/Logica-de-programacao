//Laço de repetição - FOR

// O professor te colocou de castigo e pediu para você escrever mil vezes a frase "Eu vou prestar atenção ás aulas"
for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção ás aulas");
}

//Escreva todos os números de 1 a 20
for (let i = 1; i < 21; i++) {
  console.log(i);
}

//mostre no console do sistema os úmeros pares entre 1 e 20
for (let i = 0; i < 1000; i++) {
  i % 2 == 0 && console.log(i);
}

//Dado um vetor, calcule e exiba o somatório de seus elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma dos elementos:", soma);

//Ddado um vetor, calcule e exiba a quantidade de pares e impares
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
var pares = 0;
var impares = 0;

for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("total de pares:", pares);
console.log("total de impares:", impares);

//Dado um vetor multiplique todos os seus elemntos por 3 com laço FOR
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
console.log(numeros)
for (let i = 0; i < numeros.length; i++) {
   numeros[i] *= 3;
}
console.log("Vetor multiplicado por 3");
console.log(numeros);
 
//Laço de repetição - FOR

// O peofessor te colocou de castigo e pediu pra você escrever mil vezes a frase "Eu vou prestar atenção às aulas".
for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção na aula veyr!");
   }
  
  // Escreva os números de 1 a 20
  
  for (let a = 1; a <= 20; a++) {
    console.log(a);
  }
  console.log("-----------------------------*--------------------------------");
  // Mostre no console do sistema os números pares entre 1 e 20
  for (let pares = 1; pares <= 20; pares++) {
    pares % 2 == 0 && console.log(pares);
  }
  
  // Dados de um vetor, calcule e exiba o somatório de seus elementos
  console.log("-----------------------------*--------------------------------");
  var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
  console.log(numeros.length);
  var soma = 0;
  for (let b = 0; b < numeros.length; b++) {
    soma += numeros[b];
  }
  
  console.log("A soma dos elementos do array é de:", soma);
  
  //Dado um vetor, calcule e exiba a quantidade de pares e ímpares
  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var = 0;
  var impares = 0;
  //ESSE CONDICIONAL ARMAZENA UM VALOR PARA REGISTRAR NO LOG DEPOIS
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] % 2 == 0 ? pares++ : impares++;
  }
  
   console.log("A quantidade de pares é:",pares,"números.");
   console.log("A quantidade de ímpares é:",impares,"números.");
  
  // Dado um vetor, mutiplique todos os seus elementos por 3 com o laço FOR
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] *= 3;
  }
  console.log("A tabuadinha do três é:", numeros);
  
  //Dada uma matriz 2x3, mostre ao usuário todos seus elementos com suas respectivas posições;
  var matriz = [
    [8, 4, 1],
    [3, 7, 8],
  ];
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let = coluna = 0; coluna < matriz[0].length; coluna++) {
      //console.log("Matriz[", linha, "][", coluna, "] =", matriz[linha][coluna]);
      console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
    }
  }
  
  //Laço de repeticão - While / Do While
  //While testa a condição antes de entrar no laço de repetição
  //Se a condição for inicalmente falsa, o laço não é executado nenhum vez
  var t = 10;
  
  while (t >= 10) {
    console.log("Entrei no laço While veyr");
    t = 0;
  }
  console.log("Terminei");
  
  //Exemplo de While com escrita de 1000 linhas
  var i = 0;
  while (i >= 69) {
    console.log(`Escrita de linha ${i}`);
    i++;
  }
  
  //Laço de reptição WHile
  // while(condição){
  // fragmento de código
  // fragmento de código
  // fragmento de código
  // fragmento de código
  // contador++  |  nessa parte o contador é a variável de controle de acesso
  //}
  Exemplo que funciona somente no navegador
  var senhaCorreta = "1234";
  var tentativa = "";
  
  while (tentativa !== senhaCorreta) {
    tentativa = prompt("Digite sua senha lixo!")
  }
  
  //Do-While testa a condição somente no final do laço de repetição
  //Sendo assim, qualquer que seja a condição, o laço é executado pelo menos uma vez
  var x = 10;
  do {
    console.log("Entrei no laço Do-While");
    x = 0;
  } while (x > 10);
  
  console.log("Terminei");
  
  
  
  
/***************************************************************** 
    lista de exercicios 
/*************************************************************
 /* 
 Crie uma função que receba a idade de uma pessoa e retorne uma frase dizendo
  se ela pode votar no Brasil.

  Regras para votação no Brasil:
  Menores de 16 anos: não podem votar.
  Entre 16 e 17 anos ou acima de 70 anos: o voto é facultativo.
  Entre 18 e 70 anos: O voto é obrigatório
  */

const podeVotar = (idade) => {
  // isso é uma função
  if (idade < 16) {
    return "Não pode votar!";
  } else if (idade >= 18 && idade < 70) {
    return "Pode votar!";
  }else{
    return "Voto facultativo!";
  }
};
var nome = [
    "Ygona",
    "Batata",
    "Fernanda",
    "Cristinne"
]
console.log("Olá", nome[0], "Você tem 16 anos e", podeVotar(16));
console.log("Olá", nome[1], "Você tem 16 anos e", podeVotar(22));
console.log("Olá", nome[2], "Você tem 16 anos e", podeVotar(70));
console.log("Olá", nome[3], "Você tem 16 anos e", podeVotar(12));
console.log("Olá", nome[4], "Você tem 16 anos e", podeVotar(67));



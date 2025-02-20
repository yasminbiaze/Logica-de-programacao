/**************************************************************************************************** 
 * exercicios vetor matriz
 * // Crie um vetor que receberá dados de um usuário*/
 
 var dados = [];
 console.log("Favor informar o seu nome!");
 dados.push("Yasmin");

 console.table(dados);

 console.log("Informe o seu cpf:");
 dados.push("123.456.789-09");

 console.table(dados);

 // Mostre ao usuário e de um bom dia
 console.log("Bom dia",dados [0], "seu CPF é:", dados[1]);

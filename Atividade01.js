/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/

var nome = "Aurora";
var banco = "Nubank";
var agencia = 7689;
var conta = "789453-7";
var saldo = 777;
console.log("***********************", banco, "***********************");
console.log("Ciente:", nome);
console.log("Agência:", agencia, "| Conta:", conta);
console.log("Seu saldo é de R$", saldo);
console.log("   +Depósito: R$75,00");
saldo = saldo + 75;
console.log("   +Depósito: R$75,00");
saldo = saldo + 75;
console.log("    -Saque: 250,00");
saldo = saldo - 250;
console.log("    -Saque: 250,00");
saldo = saldo - 250;
console.log("   +Depósito: R$75,00");
saldo = saldo + 75;
console.log("   +Depósito: R$75,00");
saldo += 75; // mesma coisa que > saldo = saldo + 50;

console.log("***************************", banco, "*************************");
console.log("Cliente:", nome);
console.log("Agência:", agencia, "Conta:", conta);
console.log("Seu saldo é de R$", saldo);

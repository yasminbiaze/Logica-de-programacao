function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());

// Crianado uma função que soma dois valores e retorna os resultados
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5+3 =", somar(5, 3));
console.log("12+ 8 =", somar(12, 8));
console.log("g,5+2,12 =", somar(6.5, 2.12));

// Crianado uma função que escreve "bom dia!"
function bomDia(nome) {
  console.log("OLá", nome, "muito bom dia para você!");
}
bomDia("Yasmin");

// Criando uma função que calcula e retorna o desconto em uma venda
function desconto(valor) {
  return valor * 0.05;
}
// console.log("O desconto do produto no valor de R$ 100,00 é R$", desconto (100));
var totalPedido = 300;
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("------------------------------------------------------");
console.log("Total do pedido: R$", totalPedido);
console.log("Total dos descontos: R$", totalDesconto);
console.log("Valor líquido: R4", valorFinal);
console.log("------------------------------------------------------");

// Crianado uma função que apresenta pessoas com arrow function
const apresentaPessoas = (nomePessoa, idade, Cidade) => {
  // Apresento a vocês: Nome_Pessoa, que tem XX anos e mora em "Cidade"*/
  console.log(
    "Apresento a vocês:",
    nomePessoa,
    "Que tem",
    idade,
    "anos e mora em",
    Cidade
  );
};
apresentaPessoas("Zuleika", 19, "Brotas");
apresentaPessoas("Pafúncio", 21, "Jaú");
apresentaPessoas("Epaminondas", 16, "Barra Bonita");

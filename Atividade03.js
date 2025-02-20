/***************************************************************** 
    lista de exercicios 
    //Crie um array de frutas com os seuintes elementos:
    banana, maçã, pera, uva, morango
    // 2. Adicione Tangerina no final.
    // 3. Adicione Goiaba no inicio.
    // 4. Exiba o conteudo do índice 5.
    // 5. Exclua o elemento uva.
    // 6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4. */

var frutas = ["banana", "Maçã", "Pera","Uva", "Morango"];
console.table(frutas);

frutas.push("Tangerina");
console.table(frutas);

frutas.unshift("Goiaba");
console.table(frutas);

console.log(frutas[5]);

var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);
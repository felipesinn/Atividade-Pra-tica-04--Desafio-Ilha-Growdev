// Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
// notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
// clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
// um certo número inteiro de GrowCoins.
// Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
// desejado pelo cliente, determine o número de cada uma das notas
// necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
// retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
// Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
// GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

let valoresDesejado =parseInt(prompt("digite o valor que deseja sacar de Growcoins"));
let notaCiquenta = 0;
let notaDez = 0;
let notaCinco = 0;
let notaUm = 0;
console.log(`Você Sacou: GC$ ${valoresDesejado}`);

while (valoresDesejado >= 50) {
    valoresDesejado -= 50;
    notaCiquenta++;
    
}

while (valoresDesejado >= 10) {
    valoresDesejado -= 10;
    notaDez++;
    
}
while (valoresDesejado >= 5) {
    valoresDesejado -= 5;
    notaCinco++;
    
} while (valoresDesejado >= 1) {
    valoresDesejado -= 1;
    notaUm++;
    
}

console.log(`Troco 50: ${notaCiquenta}`)
console.log(`Troco 10: ${notaDez}`)
console.log(`Troco 5: ${notaCinco}`)
console.log(`Troco 1: ${notaUm}`)

// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');

// Inicializando a variável que armazenará o valor com ou sem desconto
let valorFinal = valorTotal;

// Verificando se o método de pagamento tem direito a desconto
if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
  valorFinal = valorTotal * 0.9; // Aplica 10% de desconto
  console.log('\n✅ Desconto de 10% aplicado!');
} else {
  console.log('\nℹ️ Pagamento via cartão - sem desconto.');
}

// Calculando o valor por pessoa
const valorPorPessoa = valorFinal / numeroPessoas;

// Exibindo os resultados formatados
console.log(`\n💵 Valor total da conta (com desconto se aplicável): R$ ${valorFinal.toFixed(2)}`);
console.log(`👥 Número de pessoas na mesa: ${numeroPessoas}`);
console.log(`💳 Método de pagamento: ${metodoPagamento}`);
console.log(`💰 Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}\n`);

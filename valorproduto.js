/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:

À vista Débito, recebe 10% de desconto;
À vista no Dinheiro ou PIX, recebe 15% de desconto;
Em duas vezes, preço normal de etiqueta sem juros;
Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

--------------------------------------------------------------------------------------------------

/**
 * Calcula o valor a ser pago por um produto com base na condição de pagamento escolhida.
 *
 * @param {number} preco - O preço normal de etiqueta do produto.
 * @param {number} condicaoPagamento - O código da condição de pagamento escolhida:
 *   1 - À vista Débito, recebe 10% de desconto.
 *   2 - À vista no Dinheiro ou PIX, recebe 15% de desconto.
 *   3 - Em duas vezes, preço normal de etiqueta sem juros.
 *   4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
 * @returns {number|string} - O valor final a ser pago pelo produto ou uma mensagem de erro se a condição de pagamento for inválida.
 */
/*


*/

const preco = 100;
const condicaoPagamento = 4;


function calculoPagamento(preco, condicaoPagamento) {

    switch (condicaoPagamento) {
        case 1:
            return preco - (preco * 0.1);
        case 2:
            return preco - (preco * 0.15);
        case 3:
            return preco;
        case 4:
            return preco + (preco * 0.1);
        default:
            return 'Condição de pagamento inválida';
    }
}

console.log(calculoPagamento(preco, condicaoPagamento)); // 110

// Exercício para cálculo do valor de combustível com base na distância percorrida e no consumo do veículo.

const distancia = 100; // Distância percorrida em km
const consumo = 10; // Consumo do veículo em km/l
const tipoCombustivel = 'gasolina'; // Tipo de combustível utilizado

function calcularConsumo(distancia, consumo, tipoCombustivel) {
    const precosCombustiveis = {
        etanol: 4.59,
        gasolina: 5.19
    };
    return (distancia / consumo) * precosCombustiveis[tipoCombustivel];
}

console.log(calcularConsumo(distancia, consumo, tipoCombustivel).toFixed(2)); // 51.90

// criar comentários dos trechos acima em português
// criar função para calcular o consumo de combustível com base na distância percorrida, consumo do veículo e tipo de combustível escolhido
// calcular o valor do combustível com base no tipo de combustível escolhido
// retornar o valor do combustível
// exibir o valor do combustível no console
// exemplo de uso: calcularConsumo(100, 10, 'etanol') => 45.9
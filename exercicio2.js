//Exercício para calculo do valor de combustível com base na distância percorrida e no consumo do veículo.

const distancia = 100; // Distância percorrida em km
const consumo = 10; // Consumo do veículo em km/l
//calcular consumo com base no uso de etanol ou gasolina sendo o tipo de combustível escolhido pelo usuário
//etanol = 4.59
//gasolina = 5.19
const tipoCombustivel = 'etanol'; // Tipo de combustível utilizado

function calcularConsumo(distancia, consumo, tipoCombustivel) {
    let valorCombustivel = 0;
    if (tipoCombustivel === 'etanol') {
        valorCombustivel = 4.59;
    } else if (tipoCombustivel === 'gasolina') {
        valorCombustivel = 5.19;
    }
    return (distancia / consumo) * valorCombustivel;
}

console.log(calcularConsumo(distancia, consumo, tipoCombustivel)); // 45.9

//criar comentarios dos trechos acima em portugues
//criar função para calcular o consumo de combustível com base na distância percorrida, consumo do veículo e tipo de combustível escolhido
//calcular o valor do combustível com base no tipo de combustível escolhido
//retornar o valor do combustível
//exibir o valor do combustível no console
//exemplo de uso: calcularConsumo(100, 10, 'etanol') => 45.9


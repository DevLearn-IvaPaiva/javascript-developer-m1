// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const { gets, print } = require('./funcoes-auxiliares-ex1');

const nota = gets();

if (nota < 5) {
    console.log('reprovado')
} if (nota >= 5 && nota < 7) {
    console.log('recupeção')
} else {
    console.log('aprovado')
}

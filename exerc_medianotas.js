/*
## exercicio média de notas ##

fazer a média de 3 notas com as seguintes regras de classificação:

- média menor que 5, reprovação
- média entre 5 e 7, recuperação
- média maior que 7, aprovação
*/

const nota1 = 5;
const nota2 = 3;
const nota3 = 6;

let resultado;
const media = calcularMedia(nota1, nota2, nota3);

if (media < 5) {
    resultado = "reprovado(a)";
} else if (media >= 5 && media <= 7) {
    resultado = "em recuperação";
} else {
    resultado = "aprovado(a)";
}

console.log(`O aluno obteve uma média de ${media.toFixed(2)}, sendo classificado como: ${resultado}`);
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
};




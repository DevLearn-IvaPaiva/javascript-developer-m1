

//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
            console.log(`${i} é par!`);
        } else {
            console.log(`${i} é impar!`);
        }
        
    }
    
    
 const numerosPares = []; for (let i = 0; i < 10; i = i + 2) { numerosPares.push(i); } console.log(numerosPares); 
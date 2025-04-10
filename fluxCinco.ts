let teclado = require (`prompt-sync`)();
let total_pessoas: number = 1;
let cont_pessoas: number = 0;

do{
    let idade: number = 0;
    let salario: number = 0;
    
    idade = parseInt(teclado(`Qual a idade do funcionário ${total_pessoas}: `));
    salario = parseInt(teclado(`Qual o salario do funcionário ${total_pessoas}: `));

    if (idade < 30 && salario > 3000){
        cont_pessoas++;
        total_pessoas++;
    }
    else{
        total_pessoas++;
    }
}while(total_pessoas < 50);

console.log(`As pessoas menores de 30 anos que ganham um salário superior á R$3,000,00 é ${cont_pessoas}`)
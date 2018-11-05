console.log("Hello!");

let nome = prompt ('Qual o seu nome?');
let idade = prompt ('Qual a sua idade?');
let rendaDoCliente = prompt ('Qual a sua renda?');
let valorDoEmprestimo = prompt ('Qual o valor do seu emprestimo?');
let numeroDaParcela = prompt ('número da parcela?');


let valorDoemprestimo = numeroDaParcela = prompt ('Número de parcelas');
let total = valorTotal = valorDoemprestimo * (1 + 0.08) ** numeroDaParcela;

if (idade >= 65 < 25) {
    alert ('Aprovado!')
}

else if (rendaDoCliente >= 1.500,00){
    alert ('Aprovado!')
}

else if (valorDoEmprestimo >= 10* rendaDoCliente ){
    alert ('Parabéns, você foi aprovado !')
}

else {
    alert ('Reprovado:(')
}
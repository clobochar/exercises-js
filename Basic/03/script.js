
function entrar() {
    let nome = prompt('Digite o seu nome')
    let idade = prompt('Digite a sua idade')


let matrix = ''
let maioridade = ''

if(nome == "Thomas Anderson") {
    matrix = 'Você é o personagem do filme The Matrix!'
}else {
    matrix = ''
}

if(idade >= 18) {
    maioridade = 'MAIOR'
}else {
    maioridade = 'MENOR'
}

document.querySelector('#saudacao').innerHTML =`Olá ${nome}, você é ${maioridade}.`
document.querySelector('#personalizada').innerHTML = `${matrix}`

}

/*
 Modifique o exercício anterior para pedir os dados do usuário somente depois dele clicar em um botão escrito "Entrar". 

Faça a mensagem de saudação ser exibida em um H1, e a mensagem personalizada em um H2.

RESOLUÇÃO:
Para resolver esse problema, criei uma função que é ativada através do evento onclick que está no botão entrar.
Criei no HTML um H1 e H2 com id cada um para que, ao final da função, usando o querySelector por id, é possível inserir o texto de HTML de string literal.
P.S. Quando finalizei o código e testei, não funcionava. No console aparecia que o nome não era definido, isso porque, primeiramente, a minha função eram apenas os prompts para inserir os dados. Percebi que todo o código deveria estar dentro da função. Ao arrumar, o problema foi solucionado.
*/
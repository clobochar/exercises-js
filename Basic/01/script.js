
let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');

if(idade >= 18){
    document.write(`Olá ${nome}, você é MAIOR de idade.`)
}else {
    document.write(`Olá ${nome}, você é MENOR de idade.`)
}

/*
Faça uma página que ao entrar vai pedir o nome do usuário e depois a idade, em seguida mostre na tela uma mensagem de saudação de acordo com a idade do usuário:  

"Olá [nome], você é MAIOR de idade" 

ou 

"Olá [nome], você é MENOR de idade".

RESOLUÇÃO:
Primeiro, era preciso criar as variáveis que iriam receber as informações de "nome" e "idade". Uilizei o prompt para que o usuário inserisse essas informações.
O segundo passo foi validar se o dado "idade" é maior e igual ou menor que 18, assim iria mostrar se a pessoa é maior ou menor de idade. Fiz a verificação com o if e, caso a idade fosse maior ou igual a 18, a condição devolvia a frase na tela com uma string literal do nome e a frase. 
*/

let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')
let matrix = ''
let maioridade = ''


if(nome == 'Thomas Anderson'){
    matrix = 'Você é o personagem do filme The Matrix!'
}else {
    matrix = ''
}


if(idade >= 18){
    maioridade = 'MAIOR'
}else {
    maioridade = 'MENOR'
}

document.write(`Olá ${nome}, você é ${maioridade}. ${matrix}`)

/*
Modifique o exercício anterior para exibir uma mensagem personalizada caso o nome da pessoa seja "Thomas Anderson", exibir: 

"Olá [nome], você é MAIOR de idade. Você é personagem do filme The Matrix!". 

Mantenha a mensagem condizente com a idade informada.

RESOLUÇÃO:
Peço os dados "idade" e "nome" para o usuário através do prompt.
Criei duas variáveis vazias: "maioridade" e "matrix" que sã usadas para criar a string literal que é visualizada na tela.
Primeiro faço a verificação do nome inserido. Caso seja "Thomas Anderson", a variável "matrix" receber o valor "Você é o personagem do filme The Matrix!". Caso contrário, ela continua vazia.
Depois faço a verificação da idade. Aqui fiz uma melhoria do exercício anterior onde eu crio a variável "maioridade" e ela começa vazia. Após a verificação é atribuída a ela o valor de "MAIOR" ou "MENOR".
Ao final, utilizo o document.write para apresentar na tela a string literal com as variáveis "nome", "maioridade" e "matrix" com os valores correspondentes ao dados inseridos pelo usuário.
*/
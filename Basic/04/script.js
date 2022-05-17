
function entrar() {
    let nome =  prompt('Digite o seu nome')
    let idade = prompt('Digite a sua idade')

    let matrix = ''
    let maioridade = ''

    if (nome == "Thomas Anderson"){
        matrix = 'Você é o personagem do filme The Matrix!'
    }else {
        matrix = ''
    }

    if (idade >= 18) {
        maioridade = 'MAIOR'
    }else  {
        maioridade = 'MENOR'
    }

    if (nome === '' || idade === '') {
        alert('Preencha os campos corretamente')
    }else {
        document.querySelector('#saudacao').innerHTML = `Olá ${nome}, você é ${maioridade}.`
        document.querySelector('#personalizada').innerHTML = `${matrix}`
    }
}

/*
Modifique o exercício anterior para exibir um alerta escrito "Preencha os campos corretamente!" caso o usuário não preencha o nome ou idade. 

A página não deve exibir a mensagem de saudação neste caso.

RESOLUÇÃO:
Para essa resolução, eu acrescentei mais uma condição if para, caso o campo nome ou idade ficassem vazios, aparecer um alerta com a mensagem "Preencha os campos corretamente". Caso contrário, as mensagens de saudação e personalizada irão aparecer na página.
*/
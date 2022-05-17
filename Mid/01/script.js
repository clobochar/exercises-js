
let botaoDiminuir = document.querySelector('#botaoDiminuir')
let botaoAumentar = document.querySelector('#botaoAumentar')

let numero = 0

function diminuir(){
    numero--;
    document.querySelector('#numero').innerHTML = `${numero}`
}

function aumentar(){
    numero++;
    document.querySelector('#numero').innerHTML = `${numero}`
}

botaoDiminuir.onclick = diminuir;
botaoAumentar.onclick = aumentar;

/*
EXERCÍCIO:
Criar um contaor que, ao clicar no botão - irá diminuir o número em 1 e ao clicar no botão + irá aumentar o número em 1.

RESOLUÇÃO:
Primeiro, criei os elementos no HTML (numero e botões).
Com Javascript, criei duas variáveis e atribui os botões a cada uma delas. Depois, criei duas funções (uma para diminuir o número e outra para aumentar o número). Depois adicionei o evento onclick aos botões e atribui a função para aumentar e diminuir, respectivamente ao botão.
*/
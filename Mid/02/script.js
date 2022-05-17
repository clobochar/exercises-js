
let contador = document.querySelector('#contador')
let botaoDiminuir = document.querySelector('#botaoDiminuir')
let botaoAumentar = document.querySelector('#botaoAumentar')

let numero = 0

let aumentaIntervalo
let diminuiIntervalo


function diminuir(){
    clearInterval(aumentaIntervalo)
    setInterval(function(){
        numero--
        contador.innerText = numero
    }, 300)
    botaoAumentar.classList.remove('green')
    botaoDiminuir.classList.add('red')
}


botaoAumentar.onclick = function(){
    clearInterval(diminuiIntervalo)

    botaoDiminuir.classList.remove('red')
    botaoAumentar.classList.add('green')  
    
    aumentaIntervalo = setInterval(function(){
        numero++
        contador.innerText = numero
    }, 300)    
}


botaoDiminuir.onclick = function(){
    clearInterval(aumentaIntervalo)

    botaoDiminuir.classList.add('red')
    botaoAumentar.classList.remove('green')

    diminuiIntervalo = setInterval(function(){
        numero--
        contador.innerText = numero
    }, 300)
}


const resultado = document.querySelector('#resultado')


function estilo() {
    let nume = document.querySelectorAll('.nume')
    nume.classList.add('.red')
}

function inserir(num) {
    resultado.innerHTML += num
}

function limpar() {
    document.getElementById('resultado').innerHTML = ''
}

function del() {
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        document.getElementById('resultado').innerHTML = 'erro'
    }
}

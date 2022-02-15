// Digitos
const btn1 = document.querySelector('#n1')
const btn2 = document.querySelector('#n2')
const btn3 = document.querySelector('#n3')
const btn4 = document.querySelector('#n4')
const btn5 = document.querySelector('#n5')
const btn6 = document.querySelector('#n6')
const btn7 = document.querySelector('#n7')
const btn8 = document.querySelector('#n8')
const btn9 = document.querySelector('#n9')

// Operadores 
const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')
const multiplicar = document.querySelector('#multiplicar')
const dividir = document.querySelector('#dividir')

const visor = document.querySelector('#visor')

var nX = ''
var nY = ''
var operador = '' 


btn1.addEventListener('click', function() {
    const n = 1
    adicionarX(n)
})

btn2.addEventListener('click', function() {
    const n = 2
    adicionarX(n)
})

btn3.addEventListener('click', function() {
    const n = 3
    adicionarX(n)
})

btn4.addEventListener('click', function() {
    const n = 4
    adicionarX(n)
})

btn5.addEventListener('click', function() {
    const n = 5
    adicionarX(n)
})

btn6.addEventListener('click', function() {
    const n = 6
    adicionarX(n)
})

btn7.addEventListener('click', function() {
    const n = 7
    adicionarX(n)
})

btn8.addEventListener('click', function() {
    const n = 8
    adicionarX(n)
})

btn9.addEventListener('click', function() {
    const n = 9
    adicionarX(n)
})

somar.addEventListener('click', function() {
    operador = '+'
    addVisor
})



function adicionarX(n) {
    if (operador.length === 0) {
        nX = nX.concat(n)
        console.log(nX)
        addVisor()
    } 

    if (operador.length > 0) {
        nY = nY.concat(n)
        console.log(nY)
        addVisor()
    }
}

function addVisor() {
    visor.innerHTML = x
}


var a = '11'
var b = '+'
var c = '2'

var d = parseInt(a.concat(b).concat(c))



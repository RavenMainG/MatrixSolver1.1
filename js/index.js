// Importaciones
import rMath from "./ravenMath.js";


// Variables boton menu
const boton = document.querySelector('.boton')
const navMenu = document.querySelector('.lista-menu')

// Variables boton agregar
const botonAgregar = document.querySelector('.agregar')
let filaEcuacion = document.createElement('div')
const labelEcuacion = document.createElement('label')
const inputEcuacion = document.createElement('input')
let divEcuaciones = document.querySelector('.ecuaciones')

// Variables boton eliminar
const botonEliminar = document.querySelector('.quitar')

// Boton reiniciar
const botonReiniciar = document.querySelector('.reiniciar')

// Boton calcular 
const botonCalcular = document.querySelector('.calcular')
// Variables boton calcular
let ecuaciones
let arrayMatriz = []

// Label del resultado
const labelResultado = document.querySelector('.label-resultado')




// Variables de conteo
let filaContador = 2


const creadorNewFila = () => {
    let newFila
    // console.log(divEcuaciones)
    filaContador ++
    labelEcuacion.innerHTML = `Ec. ${filaContador} `
    inputEcuacion.type = 'text'
    inputEcuacion.classList.add('input')
    filaEcuacion.classList.add('ecuacion')
    filaEcuacion.appendChild(labelEcuacion)
    filaEcuacion.appendChild(inputEcuacion)
    newFila = filaEcuacion.cloneNode(true)
    divEcuaciones.appendChild(newFila)
}

// Inicio boton menu
boton.addEventListener('click', () => {
    // console.log('presion')
    navMenu.classList.toggle('active-boton')
})
// Fin boton menu

// Boton agregar
botonAgregar.addEventListener('click', () => {
    if(filaContador < 5){
        creadorNewFila()
    }
})
// Fin boton agregar

// Boton eliminar fila
botonEliminar.addEventListener('click', () => {
    if (filaContador > 2) {
        divEcuaciones.removeChild(divEcuaciones.lastChild)
        filaContador --
        // console.log(divEcuaciones)
    }

})
// fin boton eliminar fila

// Boton reiniciar
botonReiniciar.addEventListener('click', () => {
    // console.log('presion')
    for(let i = filaContador; i > 2; i--) {
        divEcuaciones.removeChild(divEcuaciones.lastChild)
        filaContador --
    }
    labelResultado.innerHTML = '(?)'
    ecuaciones = document.querySelectorAll('input')
    ecuaciones.forEach(input => {
        input.value = ''
    });

})
// Fin boton reiniciar

const ecuMatriz = (string) => {
    const newString = string.match(/[+-=-]?\d*.?\d*?[a-zA-Z]|[-+]?[0-9][0-9]*.?\d*/g)
    console.log(newString)
    const matriz = newString.map(element => {
        let val = Number(element[0])
        if (element.length <= 2 && isNaN(Number(element)) && isNaN(val)) {
            console.log(element)
            if (element.split('')[0] == '-') {
                return -1
            }
            return 1
        } else {
            if (!isNaN(Number(element))) {
                return Number(element)
            }
            element = element.split('')
            element.pop()
            element = Number(element.join(''))
            console.log(element)
            return element
        }
    })
    return matriz
}

// Boton calcular
botonCalcular.addEventListener('click', () => {
    let newSolucion = []
    let prueba1 =[]
    for(let i = arrayMatriz.length; i >= 0; i--) {
        arrayMatriz.pop()
    }
    ecuaciones = document.querySelectorAll('input')
    ecuaciones.forEach(input => {
        // arrayMatriz.push(input.value.match(/[\+\-]?\d+/g) )
        prueba1.push(ecuMatriz(input.value))
        // arrayMatriz.push(ecuMatriz(input.value))
    });
    // console.log(typeof arrayMatriz[0][0])
    // arrayMatriz = rMath.arrStringToNumber(arrayMatriz)

    // console.log(arrayMatriz)
    console.log(prueba1)
    let solucion = rMath.metodoGauss(prueba1)
    console.log(solucion)
    

    for (let clave in solucion) {
        if(!(solucion[clave] % 1 == 0)){
            // solucion[clave] = rMath.fraccion(solucion[clave].toPrecision(3))
            newSolucion.push(rMath.fraccion(solucion[clave].toPrecision(3)))

        }else{
            newSolucion.push(solucion[clave].toString())
        }
    }

    newSolucion = newSolucion.toString()
    newSolucion = newSolucion.split(',').join(',  ')
    labelResultado.innerHTML = newSolucion
    // console.log(rMath.metodoGauss(arrayMatriz))
})
// Fin boton calcular


// 1x+2y-1z=-1
// 2x-1y+1z=9
// 1x+3y+3z=6

//1x-3y+2z=7
//4x-7y+5z=-14
//3x+1y-1z=10

const molaridad = (gramos, sustancia, litros) => {
    return (gramos/ sustancia) / litros
}

console.log((molaridad(100, 136, 12).toPrecision(3)))
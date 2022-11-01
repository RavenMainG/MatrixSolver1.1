const fraccion = (number) => {
    let numerador, entero, denominador, signo, maxDiv
    numerador = number.toString().split('.')[1]
    entero = number.toString().split('.')[0]
    if(Number(entero) < 0){
        console.log('Entero: ', entero)
        signo = entero.charAt()
        entero = entero.split('').splice(1, entero.split('').length).join('')
        console.log('Entero cambiado: ',entero)
    }else{
        signo = '+'
    }
    denominador = Math.pow(10, numerador.length)
    numerador = Number(numerador)
    entero = Number(entero)

    console.log('Numerador: ',numerador)
    console.log('Denominador: ', denominador)
    numerador = (entero * denominador) + numerador
    console.log('Numerador: ',numerador)

    
    maxDiv = maxComDiv(numerador, denominador)
    numerador = numerador / maxDiv
    denominador = denominador / maxDiv
    return `${signo}${numerador}/${denominador}`
}

const maxComDiv = (numero1, numero2) => {
    let temporal
    while (numero2 !== 0){
        temporal = numero2
        numero2 = numero1 % numero2
        numero1 = temporal
    }
    return numero1
}

console.log(fraccion(-52.2))

let a = 'hola'

a = a.split('')
console.log('a: ',a)
export const modFila = (fila, pivote, sesgo) => {
    let newFila = []
    for(let i = 0; i < pivote.length; i++) {
        newFila.push((sesgo * pivote[i]) + fila[i])
    }
    return newFila
}

export const metodoGauss = (array) => {
    // Declaracion de variables
    let numVariables = array[0].length - 1
    const pivote = array[0]
    let camFila1, camFila2, camFila3, camFila4
    let x, y, z, a, b
    const newArr = []

    switch (numVariables) {
        case 2:
            console.table(array)
            camFila1 = modFila(array[1], pivote, (array[1][0] / -array[0][0]))
            y = (camFila1[2] / camFila1[1])
            x = (pivote[2] + ( -pivote[1] * y)) / pivote[0]
            console.table([pivote, camFila1])
            console.log({x, y})
            return {x, y}
            break
        case 3:
            camFila1 = modFila(array[1], pivote, (array[1][0] / -array[0][0]))
            camFila2 = modFila(array[2], pivote, (array[2][0] / -array[0][0]))
            camFila2 = modFila(camFila2, camFila1, (camFila2[1] / -camFila1[1]))
            console.log([array[0], camFila1, camFila2])


            z = (camFila2[3] / camFila2[2])
            y = ((camFila1[3] + (-camFila1[2] * z)) / camFila1[1])
            x = (pivote[3] + (-pivote[2] * z) + (-pivote[1] * y)) / pivote[0]
            // console.log(x.toPrecision(3))
            // console.log(y.toPrecision(3))
            // console.log(z.toPrecision(3))
            return {x, y, z}
            break;
        case 4:
            console.table(array)
            camFila1 = modFila(array[1], pivote, (array[1][0] / -array[0][0]))
            camFila2 = modFila(array[2], pivote, (array[2][0] / -array[0][0]))
            camFila3 = modFila(array[3], pivote, (array[3][0] / -array[0][0]))
            camFila2 = modFila(camFila2, camFila1, (camFila2[1] / -camFila1[1]))
            camFila3 = modFila(camFila3, camFila1, (camFila3[1] / -camFila1[1]))
            camFila3 = modFila(camFila3, camFila2, (camFila3[2] / -camFila2[2]))
            newArr.push(pivote, camFila1, camFila2, camFila3)
            console.table(newArr)
            a = (camFila3[4] / camFila3[3])
            z = (camFila2[4] + ( -camFila2[3] * a)) / camFila2[2]
            y = (camFila1[4] + ( -camFila1[3] * a) + ( -camFila1[2] * z)) / camFila1[1]
            x = (pivote[4] + ( -pivote[3] * a) + ( -pivote[2] * z) + ( -pivote[1] * y)) / pivote[0]
            // console.log({a, z, y, x})
            return {x, y, z, a}
            break;
        case 5:
            console.table(array)
            camFila1 = modFila(array[1], pivote, (array[1][0] / -array[0][0]))
            camFila2 = modFila(array[2], pivote, (array[2][0] / -array[0][0]))
            camFila3 = modFila(array[3], pivote, (array[3][0] / -array[0][0]))
            camFila4 = modFila(array[4], pivote, (array[4][0] / -array[0][0]))
            camFila2 = modFila(camFila2, camFila1, (camFila2[1] / -camFila1[1]))
            camFila3 = modFila(camFila3, camFila1, (camFila3[1] / -camFila1[1]))
            camFila4 = modFila(camFila4, camFila1, (camFila4[1] / -camFila1[1]))
            camFila3 = modFila(camFila3, camFila2, (camFila3[2] / -camFila2[2]))
            camFila4 = modFila(camFila4, camFila2, (camFila4[2] / -camFila2[2]))
            camFila4 = modFila(camFila4, camFila3, (camFila4[3] / -camFila3[3]))
            
            b = (camFila4[5] / camFila4[4])
            a = (camFila3[5] + ( -camFila3[4] * b)) / camFila3[3]
            z = (camFila2[5] + ( -camFila2[4] * b) + ( -camFila2[3] * a)) / camFila2[2]
            y = (camFila1[5] + ( -camFila1[4] * b) + ( -camFila1[3] * a) + ( -camFila1[2])) / camFila1[1]
            x = (pivote[5] + ( -pivote[4] * b) + ( -pivote[3] * a) + ( -pivote[2]) + ( -pivote[1])) / pivote[0]
            console.table([pivote ,camFila1, camFila2, camFila3, camFila4])
            console.log(x)
            return {x, y, z, a, b}
            break
        default:
            break;
    }
}

export const arrStringToNumber = (array) => {
    console.log(array[0].length)

    for(let i = 0; i < array.length; i++) {
        for(let a = 0; a < array[i].length; a++) {
            array[i][a] = Number(array[i][a])
        }
    }
    return array
}

export const fraccion = (number) => {
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
    console.log(numerador)
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

export const maxComDiv = (numero1, numero2) => {
    let temporal
    while (numero2 !== 0){
        temporal = numero2
        numero2 = numero1 % numero2
        numero1 = temporal
    }
    return numero1
}


export default {
    metodoGauss,
    arrStringToNumber,
    maxComDiv,
    fraccion
}
// Constates para botones
const btnCalcular = document.querySelector('.btn-calcular')

btnCalcular.addEventListener('click', () => {
    console.log('presion')
})

// const mulDeter = (array, longArray) => {
//     let mult = 1
//     let suma = 0
//     const newArry = array.slice()

//     console.log('nuevo array ', newArry)
//     for(let i = 0;i < longArray; i++){
//         for(let j = 0; j < longArray - 1; j++) {
//             // console.log(newArry[i].push(newArry[i][j]))
//             newArry[i].push(array[i][j])
//             console.log('hola')
//         }
//         console.log(' ')
//     }
//     console.log(array)

//     // for(let i = 0; i < longArray; i++){
//     //     for(let j = 0; j < longArray; j++){
//     //         console.log(mult * array[j][j + i])
//     //     }
//     //     suma = suma + mult
//     // }
//     // console.log(suma)
// }


const newArr = (array) => {
    const newArr = []
    let fila = []
    for(let i = 0; i < array.length; i++){
        fila = []
        for(let j = 0; j < array.length; j++){
            fila.push(array[j][i])
            
        }
        newArr.push(fila)
    }

    return newArr
}

const prueba = (pivote) => {
    console.log(pivote)
    console.log(arr)
    let pivoteFila = arr[0]
    console.log('Pivote fila: ',pivoteFila)

}


const determinante = (array) => {
    let pivote

    const copiaArr = [...array]
    console.log('Array: ', array)
    console.log('Copia: ', copiaArr)

    for(let i = 0; i < array.length; i++) {
        
        for(let j = 0; j < array.length; j++){
            if((array[i][j + i + 1]) > 0){
                pivote = -(array[i][j + i + 1] / array[i][i])
            }else {
                pivote = -array[i][j + i + 1] / array[i][i]
            }
            if(pivote != undefined && !isNaN(pivote)){
                prueba(pivote)
            }
        }
    }
}

// let arr = [[1, 2, 3], [4, 5, 6], [-7, 8, 9]]
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.log(arr)
console.log(determinante(newArr(arr)))


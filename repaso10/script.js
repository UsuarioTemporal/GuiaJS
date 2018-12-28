// Tipos de funciones , funciones por definicion y por expresion

// funciones por definicion
function nombre(){

}


//funciones por expresion
let expresion =function(){

} 
let c = console.log
c('Hola mundo')


// funciones nombradas y funciones anonimas
//callback -> una funcion que es ejecutada por otra luego de un proceso
// e1.addEventListener('click',()=>{

// })


 
//MULTIPLES PARAMETROS
// console.log(arguments)
function sumarTodos(){
    console.log(arguments)
    let suma = 0
    for(let i=0;i<arguments.length;i++){
        suma+=arguments[i]
    } 
    return suma
}


let  sumarTodo= function(){
    // arguments.reduce((pre,curr)=>pre+curr)
    // Operador de propagacion (spread operation) ... //solo funciona para funciones nombradas o anonimas pero no en arrow function
    console.log(...arguments)
    console.log([...arguments])
    let sum = [...arguments].reduce((pre,curr)=>pre+curr)
    console.log(sum)
}

console.log(sumarTodos(1,5))
console.log(sumarTodo(1,5))

let superFuncion = function(){
    return [...arguments].reduce((pre,curr)=>pre+curr)
}

let array=[0,1,2,3,12]
console.log(superFuncion(...array))


// Parametros por rest -> igual que python  
const func = (...arr)=>{
    return arr.reduce((pre,curr)=>pre+curr)
}

console.log(func(...array))
console.log(func(1,2,5,6))
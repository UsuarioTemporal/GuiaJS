let arr = [1,2,3,4,'true',5,6]
arr.push(5)
arr.push('False',5.5,0)
arr.push(true) //añade al final
arr.unshift(4,8) //añade al inicio
arr.pop() //elimina al final y devuelve ele elemento eliminado
arr.shift() //elimina al inicio y devuelve el elemento elimnado
let suma = 0
for(let item of arr){
    if(typeof item !='number') continue
    suma+=item
}
console.log(arr instanceof Array)

// Creacion de prototipos a todos los objetos que hereden de la clase Array
Array.prototype.metodo = 'Soy un metodo desde un prototipo'

console.log(suma)
console.log(arr.metodo)
console.log(arr)

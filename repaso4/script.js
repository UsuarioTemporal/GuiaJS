let arr = [1,2,3,4,'true',5,6]
let suma = 0
for(let item of arr){
    if(typeof item !='number') continue
    suma+=item
}
console.log(arr instanceof Array)

// Creacion de prototipos a todos los objetos que hereden de la clase Array
Array.prototype.metodo = 'Soy un metodo'
console.log(suma)
let arr = [1,2,3,4,'true',5,6]
let suma = 0
for(let item of arr){
    if(typeof item !='number') continue
    suma+=item
}

console.log(suma)
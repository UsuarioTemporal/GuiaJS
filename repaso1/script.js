let number = 4
let cadena = 'cadena'
console.log(typeof(number))
console.log(typeof(cadena))

// Bucles
let conteo = 1
while( true) {
    console.log(conteo)
    conteo++
    if(conteo==5) break;
}
console.log("\n")
conteo=1
do {
    console.log(conteo)
    conteo++
    if(conteo==5) break;
}while(true)
console.log("\n")
for(let item=0;item<5;item++){
    console.log(item)
}
console.log("\n")
// Condicionales
if(conteo<5){
    console.log("Soy menor que cinco")
}else if(conteo===5){
    console.log("Soy cinco")
}else {
    console.log("Soy mayor que cinco")
}
// Funcion normal
function funcionNormal(number1,number2){
    return number1+number2
}



// Funciones funcionales
const funcionFuncional= (number1,number2) =>{
    return number1+number2
}


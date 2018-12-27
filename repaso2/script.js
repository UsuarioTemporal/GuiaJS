// alert("Hola mundo")
console.dir() //envia toda la informacion de un objeto

//las constantes se usaran para datos que nunca cambiaran su valor --> java final

const pi = 3.1416


// las variables let tiene un ambito de bloques
{
    let prisionero = true
}
{
    let prisionero = false
}
//no existe
// console.log(prisionero)

let variable = "texto \"otro texto\""

// template string = esto se usara cuando contendra elementos del html o elementos extensos

let templateString = `otra variable ${variable}` 
console.log(templateString)

console.log(templateString.toUpperCase().indexOf('O')==0)
console.log(pi.toFixed()," redondeando pi") 
console.log(pi.toFixed(0)," redondeando pi") 
console.log(pi.toFixed(1)," redondeando pi") 
console.log(pi.toFixed(2)," redondeando pi") 
console.log(pi.toFixed(3)," redondeando pi") 
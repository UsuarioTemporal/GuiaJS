// alert("Hola mundo")
console.dir() //envia toda la informacion de un objeto

//las constantes se usaran para datos que nunca cambiaran su valor --> java final

const pi = 3.14


// las variables let tiene un ambito de bloques
{
    let prisionero = true
}
{
    let prisionero = false
}
//no existe
console.log(prisionero)

let variable = "texto \"otro texto\""

// template string = esto se usara cuando contendra elementos del html o elementos extensos

let templateString = `otra variable ${variable}` 
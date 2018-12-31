// Objeto Math
// Este objeto solo tiene propiedades y metodos estayicos -
let array =[1,56,-74,2]
console.log(Math.max(...array))
console.log(Math.min(...array))


let arrayTwo = [12.85,1.2,2.45,5,6.45]
console.log("Array dos")
arrayTwo.map((item)=>{
    console.log("Redondeo hacia abajo "+Math.floor(item))
    console.log("Redondeo hacia arriba "+Math.ceil(item))
    console.log("Redondeo comun "+Math.round(item))
})



// Juego de adivinar el numero de la maquina

let dato = prompt("Ingrese los rangos[separados por comas] a,b")

let rangos = dato.split(",")

const getRandomNumber = (min,max) => {
    min=parseInt(min)
    max=parseInt(max)
    return Math.floor(Math.random()*(max-min+1)+min)
}

let guestNumber = (numberMachine)=>{
    do{
        let numPlayer = prompt("Ingrese el numero mágico")
        if(parseInt(numPlayer)==numberMachine){
            alert("Logrado")
            break;
        }
        alert("No es el numero , intentelo denuevo")
    }while(true)
}
guestNumber(getRandomNumber(...rangos))
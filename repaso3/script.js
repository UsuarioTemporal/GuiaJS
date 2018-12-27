let saludo = ' Hola como estas '
// Propiedades 
console.log(saludo.length)
saludo=saludo.trim()
console.log(saludo) // esto quita los espacios del inicio y final
console.log(saludo.length)

const CHAVEX = 'trapo trapex'

if (CHAVEX.indexOf('ap',9)!=-1){ //comienza desde el nueve hacia adelante
    console.log('Trapo encontrado')
}else if(CHAVEX.lastIndexOf('t',2)!=-1){ //comienza desde el dos hacia atras
    console.log('Igual se encontro al trapo')
}

let nuevoSaludo=CHAVEX.replace('trapo','chavo')

let arrayTrapo =nuevoSaludo.split(' ',1) //esto convertira a un array y ese numero dira el numero de elementos
let arrayOtroTrapo = nuevoSaludo.split("")

// substring(a,b) , substr(a,b) , slice(a,b)

// substr parecido al substring solo que el primero es de donde comienza y el segundo la longitud


// Nuevos métodos

// .startsWith() , .endsWith() , includes()

// let edad=prompt("Dime tu edad")



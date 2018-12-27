let saludo = ' Hola como estas '
// Propiedades 
console.log(saludo.length)
saludo=saludo.trim()
console.log(saludo) // esto quita los espacios del inicio y final
console.log(saludo.length)

const CHAVEX = 'trapo trapex'

if (CHAVEX.indexOf('ap',9)!=-1){ //comienza desde el nuevo hacia adelante
    console.log('Trapo encontrado')
}else if(CHAVEX.lastIndexOf('t',2)!=-1){ //comienza desde el dos hacia atras
    console.log('Igual se encontro al trapo')
}
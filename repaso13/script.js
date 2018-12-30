/**
 * Date requiere de ser instanciado para usarse
 * .getTime() -> milisegundos desde 1 de enero de 1970
 */
let date = new Date();
date.setFullYear(2017)
console.log(date)
console.dir(date)

console.log(date.getDay())
console.log(date.getDate())
console.log(date.getMonth())
console.log("yo soy la cantidad de milisegundos que trancurrio desde 1970 "+date.getTime())
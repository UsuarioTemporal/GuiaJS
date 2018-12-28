// programacion funcional igual que python y java

// .map() mapear , se crea un nuevo array en el cual haremos un cambio en el array original
// .filter() , filtrar algunos elementos de array original y devolvera un array nuevo
// .reduce() , coger todos elementos del arrayy devolver un unico valor

// Programacion declarativa 

// Array de objetos
let estudiantes = [
    {
        nombre : 'Carlos',
        calificacion : 20
    },
    {
        nombre : 'Juan',
        calificacion : 12
    },
    {
        nombre : 'Mario',
        calificacion : 9
    }
]
console.log(estudiantes.length)
console.log(estudiantes[2])


console.log(estudiantes)
let nuevoArr=estudiantes.filter((object)=>{
    if(object.calificacion>10){
        return object
    }
})
nuevoArr=nuevoArr.map((object)=>{
    object.nombre=object.nombre.toUpperCase()
    return object
})
// let atributosDEEstusiantes= Object.values(estudiantes)

console.log(estudiantes)


nuevoArr.forEach((item)=>{
    console.log(item.nombre)
})



let soloNombresAprobados = nuevoArr.map((object)=>{
    return object.nombre
})


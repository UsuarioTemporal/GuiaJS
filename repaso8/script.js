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
        calificacion : 15
    }
]
// reduce(cb(prev,current,[index,arr])[inicial])
let promedio = estudiantes.map((object)=>object.calificacion).reduce((pre,curr)=>{
    return pre+curr
})

promedio=promedio/estudiantes.length


let promedio2 = estudiantes.reduce((pre,curr,ind,arr)=>{
    // curr.calificacion +=pre.calificacion
    // if(ind===arr.length-1){
    //     return curr.calificacion/arr.length
    // }
    return {
        calificacion : curr.calificacion+pre.calificacion
    }
})



let mayor = estudiantes.reduce((prev,curre)=>{
    if(prev.calificacion>curre.calificacion){
        return {
            nombre : prev.nombre,
            calificacion : prev.calificacion
        }
    }
    return {
        nombre : curre.nombre,
        calificacion : curre.calificacion
    }
    
})

let menor = estudiantes.reduce((prev,curre)=>{
    if(prev.calificacion<curre.calificacion){
        return {
            nombre : prev.nombre,
            calificacion : prev.calificacion
        }
    }
    return {
        nombre : curre.nombre,
        calificacion : curre.calificacion
    }
    
})




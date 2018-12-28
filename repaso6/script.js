let myObject = {
    name:'Thom',
    edad : 20,
    comprometido : true, // :'') dejame soñar
    skills: ['java','python','javascript','css','html','go','c','c++','sql'],
    programar(){
        let cadena =``;
        for(let skill of this.skills){
            cadena+=`Yo programo en ${skill}\n`;
        }
        return cadena
    }
}
myObject.cuidad = 'Lima'
delete myObject.cuidad
console.log(myObject.name)
console.log(myObject.skills)
console.log(myObject.skills[1])
console.log(myObject.cuidad)
console.log(myObject.programar())
console.log('comprometido' in myObject)
Object.prototype.otro='otro';
console.log('otro' in myObject)
console.log(myObject.hasOwnProperty('otro'))

// copiando un objeto
let myObject2 = Object.assign({},myObject)

// Asignar variables existentes a propiedades
let firtsName = 'Thom'
let latsName = 'Maurick'
let myObject3={
    firtsName,
    latsName
}

// Expresiones en propiedades

let object4 = {
    [firtsName+latsName] : 'nombreCompleto'
}
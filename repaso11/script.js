class Persona {
    constructor(nombre,apellido,pais){
        this.nombre=nombre
        this.apellido=apellido
        this.pais=pais
    }

    saludar(){
        return `Hola , soy ${this.nombre} y vivo en ${this.pais}`
    }
}
class Alumno extends Persona{
    
    constructor(nombre,apellido,pais,nota=0){
        super(nombre,apellido,pais)
        this.nota=nota
    }
    saludar(){
        return super.saludar()+` con la nota ${this.nota}`
    }
}
let thom =new Persona('Thom','Roman','Peru')
let juan = new Alumno('Carlos','Ramirez','Peru');
console.log(thom.saludar())
console.log(juan.saludar())
/**
 * Javascript Object Notation
 * 
 * Es un formato ligero que sirve para el intercambio
 * de datos , por ejemplos para obtener y enviar informacion hacia un servidor
 * 
 * 
 * */
let personJSON={
    nombre : "Luis",
    apellido:"Gomez",
    edad :20,
    salario:200
}
let cliente=`<br>Nombre ${personJSON.nombre} <br>
            Apellido ${personJSON.apellido}`
document.write(personJSON.nombre)
document.write(cliente)


document.getElementById('info').innerHTML=cliente




/**
 * Diferencia entre un objeto JSON y un objeto literal
 * 
 * 
 */
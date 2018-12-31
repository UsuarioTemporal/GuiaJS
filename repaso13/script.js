/**
 * Date requiere de ser instanciado para usarse
 * .getTime() -> milisegundos desde 1 de enero de 1970
 */
// let date = new Date();
// date.setFullYear(1970)
// console.log(date)
// console.dir(date)

// console.log(date.getDay())
// console.log(date.getDate())
// console.log(date.getMonth())
// console.log("yo soy la cantidad de milisegundos que trancurrio desde 1970 "+date.getTime())


// Ejercicio 1 : imprimir la fecha y hora en nuestro formato personalizado

let fecha = new Date()
const day = (dato)=>{
    let days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    return days[dato];
}

const mes = (numberMonth)=>{
    let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre']

    return months[numberMonth]
}
let hourLeadingZero= num=>{
    return ('0'+num).slice(-2)
} 
const hora = (hora)=>{
    let h =  hora.getHours()>=12 ? hora.getHours()-12 : hora.getHours()
    let s = hora.getSeconds()
    let m = hora.getMinutes()
    let amPm = hora.getHours()>=12 ? 'pm' : 'am'
    return `${hourLeadingZero(h)} : ${hourLeadingZero(m)}: ${hourLeadingZero(s)} ${amPm}`
}

let dateFormate = ` ${day(fecha.getDay())} ${fecha.getDate()} de ${mes(fecha.getMonth())} del ${fecha.getFullYear()} , ${hora(fecha)}`

document.write(dateFormate) 


// Definir fechas
console.log(new Date(1998,3,17))

// FORMATOS : 
console.log(new Date("Fri Apr 17 1998 00:00:00 GMT-0500"))

// Operaciones con fechas
let d = new Date()
let d2 = new Date(1998,3,17)
console.log(d-d2)
console.log(d*d2)
console.log(d-d2)
console.log(d/d2)
console.log(d%d2)

const miliToDateObject = (ms)=>{
    let seconds = Math.floor(ms / 1000)
    let minutes = Math.floor(ms / (1000*60))
    let hour = Math.floor(ms / (1000*60*60))
    let day = Math.floor(ms / (1000*60*60*24))
    let year = Math.floor(ms / (1000*60*60*24*365))
    return {
        year,
        day,
        hour,
        minutes,
        seconds
    }
}

const convertidor = (ms)=>{
    let obj = Object.assign({},miliToDateObject(ms))
    let years = obj.year,
        days = obj.day % 365 ,
        hours = obj.hour % 24 ,
        seconds = obj.seconds % 60 ,
        minutes = obj.minutes % 60 ;
        return {
            years,
            days,
            hours,
            minutes,
            seconds
        }



    
}
let f = miliToDateObject(d-d2)
console.log(f)
console.log(convertidor(d-d2))
console.log(Object.keys(f))
console.log(Object.values(f))

// Horarios y fechas internacionales (meridiano de greenwich)

// getUTC... UTC significa horario internacional
// getTimez oneOffset() diferencia en minutos de la hora cera a nuestra hora horaria

let newDate = new Date()
console.log("Hora local ",newDate.getHours())
console.log("Hola internacional ",newDate.getUTCHours())
console.log(newDate.getTimezoneOffset())
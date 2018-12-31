// Timers

let count = 0
setTimeout(()=>{
    console.log(count++)
},2000) //se ejecutara despues de 2 segundos

count = 0;
setInterval(()=>{
    console.log(count++)
},2000)


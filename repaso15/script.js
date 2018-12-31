// Timers

let count = 0
setTimeout(()=>{
    console.log(count++)
},2000) //se ejecutara despues de 2 segundos

count = 0;
let myInterval = setInterval(()=>{
    console.log(count++)
    if(count===5){
        clearInterval(myInterval)
    }
},2000)

// Ejercicio Reloj
// let reloj=setInterval(()=>{
//     document.body.innerHTML=new Date().toLocaleString()
// },1000)

// Ejercicio de cueta regresiva
let countDown = ms=>{
    let myCountDown = setInterval(()=>{
        let minutes = Math.floor(ms / (1000*60)),
            seconds = Math.floor(ms %(1000*60))
        document.body.innerHTML=`Queda ${minutes} minutes y ${seconds} segundos`
        if(ms===0){
            clearInterval(myCountDown)
        }
        ms-=1000
    },1000)
}

countDown(6000)
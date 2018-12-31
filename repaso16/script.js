const writing = str=>{
    let arrFromStr =str.split("")
    let i = 0
    let printStr = setInterval(()=>{
        document.body.innerHTML+=arrFromStr[i]
        if(i===arrFromStr.length-1){
            clearInterval(printStr)
        }
        i++
    },200)
}
writing('Efecto Máquina de escribir UNTELS')
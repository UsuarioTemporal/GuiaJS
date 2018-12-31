const writing = str=>{
    let arrFromStr =str.split("")
    let i = 0
    let printStr = setInterval(()=>{
        if(arrFromStr[i]===' '){
            document.body.innerHTML+=arrFromStr[i]
            document.body.innerHTML+=arrFromStr[i+1]
            i+=2
        }else{
            document.body.innerHTML+=arrFromStr[i]
            i++
        }
        if(i===arrFromStr.length){
            clearInterval(printStr)
            
        }
        
    },150)
}


writing('Efecto Máquina de escribir UNTELS')
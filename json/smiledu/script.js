const imprimeJson = table =>{
    document.getElementById('json').addEventListener('click',()=>{
        
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET','data.json',true)
        xhttp.send()

        xhttp.onreadystatechange = function(){
            if(this.status===200 && this.readyState===4){
                let data = JSON.parse(this.responseText).personas
                console.log(data)
                
            }
        }
    })
}

imprimeJson(document.getElementById('tbody'))
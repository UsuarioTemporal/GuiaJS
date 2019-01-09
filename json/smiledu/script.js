const imprimeJson = table =>{
    document.getElementById('json').addEventListener('click',()=>{
        table.innerHTML =``
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET','data.json',true)
    })
}

imprimeJson(document.getElementById('table'))
const imprimeJson = container =>{
    document.getElementById('json').addEventListener('click',()=>{
        
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET','data.json',true)
        xhttp.send()

        xhttp.onreadystatechange = function(){
            if(this.status===200 && this.readyState===4){
                let data = JSON.parse(this.responseText).personas
                // console.log(data)
                container.innerHTML=``
                data.map(element=>{
                    container.innerHTML+=`
                        <tr>
                            <td>${element.nombre}</td>
                            <td>${element.apellido}</td>
                            <td>${element.correo}</td>
                            <td>${element.dni}</td>
                            <td>${element.fecha_de_nacimiento}</td>
                            <td>${element.nombre_usuario}</td>
                            <td>${element.edad}</td>
                            <td>${element.distrito}</td>
                            <td>${element.hobbies.map(e=>{
                                return ` ${e} `
                            })}</td>
                        </tr>
                    `
                    
                })
            }
        }
    })
}

imprimeJson(document.getElementById('tbody'))
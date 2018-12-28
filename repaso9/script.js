let obj = {
    nombre : 'objeto',
    lista : ['c++','java','python'],
    sumar(){
        this.lista.forEach(element => {
            console.log('Yo programo en '+element)
        });
    }
}


const wrapper = (a,b,opcion=true)=>{
    if(opcion){
        return ()=>{
            return a + b
        }
    }
    return ()=>{
        return a-b
    }
}

console.log(wrapper(1,5)())
console.log(wrapper(1,5,true)())
console.log(wrapper(1,5,false)())

// Funciones autoinvocadas

let g = ((d,w,n)=>{
    // alert("Que pex")
    console.log(d,w,n,n.userAgent)
})(document,window,navigator)
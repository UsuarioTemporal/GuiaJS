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


// Funcion constructora 
let Pais = function(nombre,moneda){
    this.nombre=nombre
    this.moneda=moneda
}
let peru = new Pais('Peru','Sol');


let arr = [1,true,'sdfsdf',undefined,null,1,1]
let suma = 0
for (let item of arr){
    if (typeof item!='number') continue
    suma+=item
}
let sum = arr.reduce((prev,curr)=>{
    if (typeof curr !='number' && typeof prev !='number'){
        return 0
    }else if(typeof curr !='number'){
        return prev
    }else if(typeof prev !='number'){
        return curr
    }else{
        return curr+prev
    }
})
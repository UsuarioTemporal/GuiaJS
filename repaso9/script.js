let obj = {
    nombre : 'objeto',
    lista : ['c++','java','python'],
    sumar(){
        this.lista.forEach(element => {
            console.log('Yo programo en '+element)
        });
    }
}
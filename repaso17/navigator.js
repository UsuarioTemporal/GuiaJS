/**
 * Geolocation  es un objeto con tres métodos
 *  .clearWatch()
 *  .watchPosition()
 *  .getCurrentPosition(success[,error,options])
 * 
 * 
 */
navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position)
})
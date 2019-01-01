/**
 * Geolocation  es un objeto con tres métodos
 *  .clearWatch()
 *  .watchPosition()
 *  .getCurrentPosition(success[,error,options])
 * 
 * 
 */
let coords = navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position)
    let coords = position.coords;
    let lat = coords.latitude
    let long = coords.longitude
    console.log(long,lat)
})
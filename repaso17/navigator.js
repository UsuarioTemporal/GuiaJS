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
    let coord = position.coords
    let lat = coord.latitude
    let long = coord.longitude
    console.log(lat,long)
})


// Objeto Location .- contiene la informacion de la p agina actual
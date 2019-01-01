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


// Objeto Location .- contiene la informacion de la pagina actual

// Determinar un item activo en un menu
const getCurrentMenuItem = (containerElement)=>{
    let url = location.href,
        links =[...containerElement.querySelectorAll('a')]
    links.map(link=>{
        if(link.href===url){
            return link.classList.add('active')
        }
    })

}
getCurrentMenuItem(document.getElementById('menu'))
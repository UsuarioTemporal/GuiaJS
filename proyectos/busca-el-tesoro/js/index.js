import {getRandomCoords,getdistance,information} from './helpers.js'

const WIDTH = 400
const HEIGHT = 400

let target = {
    x:getRandomCoords(WIDTH),
    y:getRandomCoords(HEIGHT)
}
const map = document.getElementById('map')
const info = document.getElementById('distancia')
map.addEventListener('click',e=>{
    e.preventDefault()

    let distance = getdistance(e,target)
    info.innerHTML = `${information(distance)}`
    if(distance<=10){
        alert('encontrado')
        return location.reload()
    }
})
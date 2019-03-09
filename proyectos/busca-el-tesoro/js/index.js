import {getRandomCoords} from './helpers.js'
const map = document.getElementById('map')
console.log(getRandomCoords(5));
map.addEventListener('click',e=>{
    e.preventDefault()
    console.log(e.offsetX);
    console.log(e.offsetY);
})
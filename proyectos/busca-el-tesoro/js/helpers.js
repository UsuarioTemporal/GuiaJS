export const getRandomCoords = size=>{
    return Math.floor(Math.random()*size)
}
export const getdistance = (coord,target)=>{
    let a = coord.offsetX - target.x
    let b = coord.offsetY - target.y
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
}

export const information = distance=>{
    if(distance>300) return 'Super frio'
    if(distance>100) return 'frio'
    if(distance>50) return 'tibio'
    if(distance>15) return 'caliente'
    if(distance>10) return 'Super Caliente'
}
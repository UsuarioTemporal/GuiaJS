
const getImages = container => [...container.querySelectorAll('img')]


const getLargeImages = gallery => gallery.map(el=>el.src)
                                        .map(el=>el.replace('thumb','large'))
const openLightBoxEvent = (container,gallery)=>{
    container.addEventListener('click',(e)=>{
        
    })
}
const openLightBox = image=>{

}

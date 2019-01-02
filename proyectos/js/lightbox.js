
const getImages = container => [...container.querySelectorAll('img')]


const getLargeImages = gallery => gallery.map(el=>el.src)
                                        .map(el=>el.replace('thumb','large'))

const getDescription =gallery =>gallery.map(el=>el.alt)
const openLightBoxEvent = (container,gallery)=>{
    container.addEventListener('click',(e)=>{
        let el = e.target,
            index = gallery.indexOf(el)
        if(el.tagName==='IMG'){
            openLightBox(gallery,index,large,description)
        }
    })
}
const openLightBox = (gallery,index,large,description)=>{
    let lightboxElement = document.createElement('div')
    lightboxElement = `
        <div class="lightbox-overlay">
            <figure>
                <img>
                <figcaption>
                </figcaption>
            </figure>
        </div>
    `
}

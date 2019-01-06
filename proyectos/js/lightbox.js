
const getImages = container => [...container.querySelectorAll('img')]


const getLargeImages = gallery => gallery.map(el=>el.src)
                                        .map(el=>el.replace('thumb','large'))

const getDescription =gallery =>gallery.map(el=>el.alt)

const openLightBoxEvent = (container,gallery,large,description)=>{
    container.addEventListener('click',(e)=>{
        let el = e.target,
            index = gallery.indexOf(el)
        if(el.tagName==='IMG'){
            openLightBox(gallery,index,large,description)
        }
    })
}

const closeModalFunction = modalElement =>{
    let closeModal = modalElement.querySelector('.close-modal')
    closeModal.addEventListener('click',(e)=>{
        e.preventDefault()
        document.body.removeChild(modalElement)
    })
}
const navigateLightbox=(lightboxElement,larges,description,index)=>{
    let prevButton = lightboxElement.querySelector('.prev')
    let nextButton = lightboxElement.querySelector('.next')
    lightboxElement.addEventListener('click',e=>{
        e.preventDefault()
    })
}
const openLightBox = (gallery,index,larges,description)=>{
    let lightboxElement = document.createElement('div')
    lightboxElement.innerHTML = `
        <div class="lightbox-overlay">
            <figure class="lightbox-container">
                <div class="close-modal">X</div>
                <img src="${larges[index]}" class="lightbox-image">
                <figcaption>
                    <p class="lightbox-description">${description[index]}</p>
                    <nav class ="lightbox-navigator">
                        <a href="#" class="lightbox-navigation__button prev">
                        ◀
                        </a>
                        <span class="lightbox-navigation__counter">Imagen ${index+1} de ${gallery.length}</span>
                        <a href="#" class="lightbox-navigation__button next">
                        ▶
                        </a>
                    </nav>
                </figcaption>
            </figure>
        </div>
    `
    lightboxElement.id = 'lightbox'
    document.body.appendChild(lightboxElement)

    closeModalFunction(lightboxElement)
    navigateLightbox(lightboxElement,larges,description,index)
}
const lightbox = container =>{
    let images = getImages(container),
    larges = getLargeImages(images),
    description = getDescription(images)
    openLightBoxEvent(container,images,larges,description)
}
lightbox(document.getElementById('gallery-container'))